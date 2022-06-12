import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Stack from "@mui/material/Stack";
import { CallMemberApi } from "../actions"
import { useDispatch, useSelector } from "react-redux";


function LoginPage() {
    const [MemberID, setMemberID] = useState('');
    const [MemberPassword, setMemberPassword] = useState('');
    const [Clicked, setClicked] = useState(false)

    const MemberData = useSelector(state => state.Member);

    useEffect(() => {
        if (MemberData.length == 0) {
            return;
        } else {
            navigate("/IndexPage");
        }
    }, [MemberData])

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleMemberIDChange = (e) => {
        setMemberID(e.target.value);
    };

    const handleMemberPasswordChange = (e) => {
        setMemberPassword(e.target.value);
    };

    const handleLogin = () => {
        setClicked(true);
        dispatch(CallMemberApi(MemberID, MemberPassword));
    }

    return (
        <Grid container={true} direction="column" sx={{ height: "100vh" }}>
            <Typography variant="h2">
                歡迎進入海軍艦艇裝備數位後勤系統
            </Typography>
            <Grid container={true} sx={{ justifyContent: "center", pt: "20vh" }}>
                <Card sx={{ maxWidth: 600, boxShadow: 5 }}>
                    <CardContent container={`true`} direction="column" sx={{ alignItems: "center" }}>
                        <Stack direction="column" spacing={3}>
                            <Typography variant="h4" sx={{ pb: 1 }}>
                                請輸入你的會員ID以及密碼
                            </Typography>
                            <TextField required
                                id="outlined-required"
                                label="請輸入會員帳號"
                                onChange={handleMemberIDChange}
                                defaultValue="">

                            </TextField>
                            <TextField required
                                id="outlined-required"
                                label="請輸入會員密碼"
                                onChange={handleMemberPasswordChange}
                                defaultValue="">
                            </TextField>
                        </Stack>
                        {MemberID == "" && Clicked && <Typography sx={{ color: "#f72f40" }}>請輸入會員帳號</Typography>}
                        {MemberPassword == "" && Clicked && <Typography sx={{ color: "#f72f40" }}>請輸入會員密碼</Typography>}
                    </CardContent>
                    <CardActions>
                        <Grid container={true} justifyContent="flex-end" >
                            <Button variant="outlined" size="large" style={{ color: "#000000", borderColor: "#000000" }} onClick={handleLogin}>
                                登入
                            </Button>
                        </Grid >
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
}

export default LoginPage;