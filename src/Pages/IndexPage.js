import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import loginjpg from "../Imgs/login.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarSureButton } from "../actions";

function IndexPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [SelectValue, setSelectValue] = useState('');
    const MemberData = useSelector(state => state.Member);


    const handleChange = (e) => {
        setSelectValue(e.target.value);
    };

    useEffect(() => {
        if (SelectValue != '') { //下拉是選單選擇後設定給測選單
            dispatch(setSidebarSureButton(true));
        }
    }, [SelectValue])


    return (
        <Grid container={true} direction="column">
            <Typography variant="h2">歡迎登入{MemberData.length != 0 ? MemberData[0].帳號 : null}</Typography>
            <Grid container={true} sx={{ alignItems: "center", justifyContent: "center" }}>
                <Card sx={{ maxWidth: 600, boxShadow: 5, mt: "10vh" }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="auto"
                        image={loginjpg}
                    />
                    <CardContent container={`true`} direction="column" sx={{ alignItems: "center" }}>
                        <TextField required
                            id="outlined-required"
                            label="請輸入艦艇名稱"
                            defaultValue="沱江軍艦">
                        </TextField>
                        <Box sx={{ minWidth: 120, pt: 3 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">請選擇:</InputLabel>
                                <Select
                                    labelId="demo-simple-select-autowidth-label"
                                    id={"demo-simple-select-autowidth"}
                                    value={'' || SelectValue}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">請選擇:</MenuItem>
                                    <MenuItem value="柴油主機 MTU V4000 M93L">柴油主機 MTU V4000 M93L</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Grid container={true} justifyContent="flex-end" >
                            {/* <Link to="/Second_page" style={{ textDecoration: 'none' }}>
                                <Button variant="outlined" size="large" style={{ color: "#000000", borderColor: "#000000" }}>
                                    確定
                                </Button>
                            </Link> */}
                        </Grid >
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
}

export default IndexPage;