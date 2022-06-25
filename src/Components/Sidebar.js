

import React from 'react'
import { useState, useEffect } from "react";
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import Box from '@mui/material/Box';
import Selects from "./Selects";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { SetMemberEmpty, setSidebarSureButton } from "../actions";
import { useDispatch, useSelector } from "react-redux";

export default function Sidebar() {
    const [DrawerState, setDrawerState] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const toggleDrawer = () => {
        setDrawerState(preState => !preState);
    }
    const dispatch = useDispatch();
    const [Page, setPage] = useState(location.pathname);
    const SidebarSureButtonStatus = useSelector(state => state.SidebarSureButton);
    const MemberDatas = useSelector(state => state.Member);
    useEffect(() => {
    }, [SidebarSureButtonStatus])

    useEffect(() => {
        setPage(location.pathname);
        if (location.pathname != "/IndexPage") {
            dispatch(setSidebarSureButton(false));
        }

    }, [location.pathname])



    return (
        <Box>
            <Drawer
                anchor="left"
                open={DrawerState}
                onClose={toggleDrawer}
            >
                <Stack direction="column" spacing={2} sx={{ minWidth: "20vh", display: "flex", alignItems: "center" }}>
                    <>
                        <Button component={Link} to="Second_page" fullWidth sx={{ background: "#4888f7", color: "white", height: "10vh", fontSize: "5vh" }}>首頁 </Button>
                        <Button onClick={() => navigate(-1)}>回到上一頁</Button>
                        <Button onClick={() => navigate(1)}>回到下一頁</Button>
                        <Button component={Link} to="LoginPage" onClick={() => dispatch(SetMemberEmpty())}>登出</Button>

                        {(Page == "/LoginPage" || Page == "/IndexPage") ||
                            <Selects width={200} />
                        }
                        {SidebarSureButtonStatus && MemberDatas.length != 0 && Page == "/IndexPage" &&
                            <Link to="/Second_page" style={{ textDecoration: 'none' }}>
                                <Button variant="outlined" size="large" style={{ color: "#000000", borderColor: "#000000" }}>
                                    確定
                                </Button>
                            </Link>}
                        <IconButton sx={{ width: 50, height: 50 }}>
                            <ArrowCircleRightIcon sx={{ width: 50, height: 50 }} />
                        </IconButton>
                    </>
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
                        <>
                            <Button component={Link} to="Second_page" fullWidth sx={{ background: "#4888f7", color: "white", height: "10vh", fontSize: "3vh" }}>首頁 </Button>
                            <Button onClick={() => navigate(-1)}>回到上一頁</Button>
                            <Button onClick={() => navigate(1)}>回到下一頁</Button>
                            <Button component={Link} to="LoginPage" onClick={() => dispatch(SetMemberEmpty())}>登出</Button>
                            {(Page == "/LoginPage" || Page == "/IndexPage") ||
                                <Selects width={200} />
                            }
                            {SidebarSureButtonStatus && MemberDatas.length != 0 && Page == "/IndexPage" &&
                                <Link to="/Second_page" style={{ textDecoration: 'none' }}>
                                    <Button variant="outlined" size="large" style={{ color: "#000000", borderColor: "#000000" }}>
                                        確定
                                    </Button>
                                </Link>}
                            <IconButton onClick={toggleDrawer} sx={{ width: 50, height: 50 }}>
                                <ArrowCircleLeftIcon sx={{ width: 50, height: 50 }} />
                            </IconButton>
                        </>
                    </Stack>
                </Drawer>
            }


        </Box>
    );
}