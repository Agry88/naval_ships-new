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
import { Link } from 'react-router-dom'

export default function Sidebar() {
    const [DrawerState, setDrawerState] = useState(false);
    const toggleDrawer = () => {
        setDrawerState(preState => !preState);
    }
    return (
        <Box>

            <Drawer
                anchor="left"
                open={DrawerState}
                onClose={toggleDrawer}
            >
                <Stack direction="column" spacing={2} sx={{ minWidth: "20vh", display: "flex", alignItems: "center" }}>
                    <Button>首頁</Button>
                    <Button>213</Button>
                    <Button>213</Button>
                    <Selects width={200} />
                    <IconButton onClick={toggleDrawer} sx={{ width: 50, height: 50 }}>
                        <ArrowCircleRightIcon sx={{ width: 50, height: 50 }} />
                    </IconButton>
                </Stack>
            </Drawer>



            <Drawer
                anchor="left"
                variant="persistent"
                onMouseEnter={toggleDrawer}
                open={!DrawerState}
                onClose={toggleDrawer}
            >
                <Stack direction="column" spacing={2} sx={{ minWidth: "10vh", display: "flex", alignItems: "center" }}>
                    <Button component={Link} to="IndexPage">
                        首頁
                    </Button>
                    <Button component={Link} to="IndexPage">
                        首頁
                    </Button>
                    <Button component={Link} to="IndexPage">
                        回到登入
                    </Button>
                    <Selects width={100} />
                    <IconButton onClick={toggleDrawer} sx={{ width: 50, height: 50 }}>
                        <ArrowCircleLeftIcon sx={{ width: 50, height: 50 }} />
                    </IconButton>
                </Stack>
            </Drawer>


        </Box>
    );
}