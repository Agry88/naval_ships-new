import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { useState, useEffect } from "react";
import { Apiurl } from "../actions";
import { useSelector } from 'react-redux';


export default function AddProd(props) {
    const { time } = props;
    const { Pagekey } = props;
    const { ProdID } = props;

    const [ProdName, setProdName] = useState("");
    const [Father_item, setFather_item] = useState(ProdID);
    const [LastDatas, setLastDatas] = useState([]);
    const datalist = useSelector(state => state.datas);




    const handleChange = (e) => {
        setFather_item(e.target.value);
    }

    const handleNameChange = (e) => {
        setProdName(e.target.value);
    }



    // useEffect(() => {
    //     if (time != 1) {
    //         const newApiurl = Apiurl + "?way=附屬零件" + (Number(time) - 1) + "&add=false";
    //         return () => {
    //             fetch(newApiurl, { method: 'POST' })
    //                 .then(response => response.json())
    //                 .then(datas => {
    //                     setLastDatas(datas);
    //                 })
    //                 .catch(e => {
    //                     console.log("error occured");
    //                 });
    //         }
    //     } else {
    //         setLastDatas(datalist);
    //     }
    // }, [Pagekey])

    const handleAddProduct = () => {
        const newApiurl = Apiurl + "?way=附屬零件" + (Number(time)) + "&add=true" + "&addName="+ ProdName + "&addFather="+  Father_item ;
        console.log(newApiurl);
        fetch(newApiurl, { method: 'POST' })
            .then(response => response.json())
            .then(datas => {
                console.log("新增");
            })
            .catch(e => {
                console.log("error occured");
            });
    }

    return (
        <Card sx={{ minWidth: 800, minHeight: 600, display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: 1 }}>
                <Stack direction={"column"}>
                    <Typography variant="h2" sx={{ pb: 5 }}>新增零件</Typography>
                    <Typography variant="h4" sx={{ pb: 2 }}>欲新增之零件名稱:</Typography>
                    <TextField id="outlined-basic" label="欲新增之零件名稱" variant="outlined" sx={{ pb: 5 }} onChange={handleNameChange} value={ProdName} />
                    <Typography variant="h4" sx={{ pb: 2 }} >欲新增之零件相依的零件名稱:</Typography>
                    <TextField id="outlined-basic" label="相依之零件" variant="outlined" sx={{ pb: 5 }} onChange={handleChange} value={ProdID} disabled/>
                    {/* <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">相依之零件</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={Father_item}
                            label="相依之零件"
                            onChange={handleChange}
                        >
                            <MenuItem value={"請選擇:"}>請選擇:</MenuItem>
                            {time == 1 &&
                                LastDatas.map((data) => {
                                    return <MenuItem key={data.ID} value={Number(data.系統代碼)}>{data.料件名稱}</MenuItem>
                                })}
                            {time != 1 &&
                                LastDatas.map((data) => {
                                    return <MenuItem key={data.ID} value={Number(data.系統代碼) + Number(data.零件代碼)}>{data.零件名稱}</MenuItem>
                                })}
                        </Select>
                    </FormControl> */}

                </Stack>
            </CardContent>
            <CardActions sx={{ justifyContent: 'flex-end' }}>
                <Button variant="contained" size="large" onClick={handleAddProduct} >新增零件</Button>
                <Button variant="outlined" size="large" color="error" >放棄新增</Button>
            </CardActions>
        </Card>
    );
}
