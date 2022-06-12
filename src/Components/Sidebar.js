

import React from 'react'
import { useState } from "react";
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import Box from '@mui/material/Box';
import Selects from "./Selects";
import { Link, useNavigate } from 'react-router-dom';
import { SetMemberEmpty } from "../actions";
import { useDispatch } from "react-redux";

export default function Sidebar() {
    const [DrawerState, setDrawerState] = useState(false);
    const navigate = useNavigate();
    const toggleDrawer = () => {
        setDrawerState(preState => !preState);
    }
    const dispatch = useDispatch();

    return (
        <Box>
            <Drawer
                anchor="left"
                open={DrawerState}
                onMouseLeave={toggleDrawer}
                onClose={toggleDrawer}
            >
                <Stack direction="column" spacing={2} sx={{ minWidth: "20vh", display: "flex", alignItems: "center" }}>
                    <Button component={Link} to="Second_page" fullWidth sx={{background:"#4888f7",color:"white",height: "10vh",fontSize:"5vh"}}>首頁 </Button>
                    <Button onClick={() => navigate(-1)}>回到上一頁</Button>
                    <Button onClick={() => navigate(1)}>回到下一頁</Button>
                    <Button component={Link} to="loginPage" onClick={()=>dispatch(SetMemberEmpty())}>登出</Button>
                    <Selects width={200} />
                    <IconButton onMouseEnter={toggleDrawer} sx={{ width: 50, height: 50 }}>
                        <ArrowCircleRightIcon sx={{ width: 50, height: 50 }} />
                    </IconButton>
                </Stack>
            </Drawer>

            {DrawerState ? null :
                <Drawer
                    anchor="left"
                    variant="persistent"
                    onMouseEnter={toggleDrawer}
                    open={true}
                >
                    <Stack direction="column" spacing={2} sx={{ minWidth: "10vh", display: "flex", alignItems: "center" }}>
                        <Button component={Link} to="Second_page" fullWidth sx={{background:"#4888f7",color:"white",height: "10vh",fontSize:"3vh"}}>首頁 </Button>
                        <Button onClick={() => navigate(-1)}>回到上一頁</Button>
                        <Button onClick={() => navigate(1)}>回到下一頁</Button>
                        <Button component={Link} to="loginPage" onClick={()=>dispatch(SetMemberEmpty())}>登出</Button>
                        <Selects width={100} />
                        <IconButton onClick={toggleDrawer} sx={{ width: 50, height: 50 }}>
                            <ArrowCircleLeftIcon sx={{ width: 50, height: 50 }} />
                        </IconButton>
                    </Stack>
                </Drawer>
            }


        </Box>
    );
}