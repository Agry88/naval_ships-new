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
import Select from '@mui/material/Select';
import { useParams, Link , useNavigate  } from 'react-router-dom'


export default function Cards(props) {

    const [selectProd, setselectProd] = React.useState('');
    const [selectDatas, setselectDatas] = React.useState('');

    const { propdata, nextDatas } = props;
    const { time } = useParams();

    const navigate = useNavigate();

    const handleChange = (event) => {
        setselectProd(event.target.value);
    };

    useEffect(() => {
        if (nextDatas) {
            const tempdata = nextDatas.filter(data => data.系統代碼 == propdata.UniID)
            const newdata = tempdata.map(data => ({
                ...data,
                UniID: (data.系統代碼).toString() + (data.零件代碼)
            }))
            console.log("Card data is", newdata);
            setselectDatas(newdata);
        }
    }, [nextDatas])

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
                    <InputLabel id="demo-simple-select-autowidth-label">請選擇組件:</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id={"demo-simple-select-autowidth" + propdata.ID}
                        value={selectProd}
                        onChange={handleChange}
                        // label="請選擇:"
                        sx={{ width: 150 }}
                        defaultValue={""}
                    >
                        {selectDatas ?
                            selectDatas.map((selectData) => {
                                return <MenuItem key={selectData.ID} value={Number(selectData.系統代碼) + Number(selectData.零件代碼)}>{selectData.零件名稱}</MenuItem>
                            })
                            :
                            <MenuItem>請選擇:</MenuItem>
                        }
                        {/* <MenuItem value={10}>Twenty</MenuItem> */}
                    </Select>
                </FormControl>
                }

                {propdata.Detail ? 
                <Link to={"/BottomPage/" + propdata.Detail} style={{ textDecoration: 'none' }}>
                    <Button variant="outlined" size="large">查看廠商資料</Button>
                </Link>
                    :
                    selectProd
                        ? <Link to={"/DetailPage/" + (Number(time) + 1) + "/" + propdata.UniID} style={{ textDecoration: 'none' }}>
                            <Button variant="outlined" size="large" >查看詳細</Button>
                        </Link>
                        : <Button disabled={true} variant="outlined" size="large">請選擇組件</Button>}
            </CardActions>
        </Card>
    );
}