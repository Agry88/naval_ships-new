import * as React from 'react';
import { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";


export default function Cards(props) {

    const [selectProd, setselectProd] = React.useState('');
    const [selectDatas, setselectDatas] = React.useState('');

    const Carddatas = useSelector(state => state.Carddata);
    const { propdata } = props;
    const { time } = useParams();

    const navigate = useNavigate();

    const handleChange = (event) => {
        setselectProd(event.target.value);
    };

    useEffect(() => {
        if (Carddatas) {
            const tempdata = Carddatas.filter(data => data.系統代碼 == propdata.UniID)
            const newdata = tempdata.map(data => ({
                ...data,
                UniID: (data.系統代碼).toString() + (data.零件代碼)
            }))
            console.log("Card data is", newdata);
            setselectDatas(newdata);
        }
    }, [Carddatas])

    return (
        <Card sx={{ maxWidth: 330, m: 5, display: "flex", flexDirection: "column" }}>
            <CardMedia
                component="img"
                height="auto"
                image={propdata.src ? propdata.src : "https://i.imgur.com/VnF9AkY_d.webp?maxwidth=760&fidelity=grand"}
                alt="green iguana"
            />
            <CardContent sx={{ flex: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                    組件名稱:{propdata.零件名稱}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between' }}>
                {propdata.Detail ? null
                    :
                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">查看組件</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id={"demo-simple-select-autowidth" + propdata.ID}
                            value={selectProd}
                            onChange={handleChange}
                            // label="請選擇:"
                            sx={{ width: 150 }}
                            defaultValue={""}
                        >
                            <MenuItem>請選擇:</MenuItem>
                            {selectDatas ?
                                selectDatas.map((selectData) => {
                                    return <MenuItem key={selectData.ID} value={String(selectData.系統代碼) + String(selectData.零件代碼)}>{selectData.零件名稱}</MenuItem>
                                })
                                :
                                null
                            }
                            {/* <MenuItem value={10}>Twenty</MenuItem> */}
                        </Select>
                    </FormControl>
                }
                <Stack direction="column">
                    {propdata.Detail ?
                        <Link to={"/BottomPage/" + propdata.Detail} style={{ textDecoration: 'none' }}>
                            <Button variant="outlined" size="large">查看廠商資料</Button>
                        </Link>
                        :
                        <>
                            {selectProd!='' ?
                                <Link to={"/DetailPage/" + (Number(time) + 2) + "/" + selectProd} style={{ textDecoration: 'none' }}>
                                    <Button variant="outlined" size="large" >確認</Button>
                                </Link>
                                :
                                <Button variant="outlined" size="large" disabled>請選擇</Button>}
                            <Link to={"/DetailPage/" + (Number(time) + 1) + "/" + propdata.UniID} style={{ textDecoration: 'none' }}>
                                <Button variant="outlined" size="large" >查看詳細</Button>
                            </Link>
                        </>
                    }
                </Stack>

            </CardActions>
        </Card>
    );
}
