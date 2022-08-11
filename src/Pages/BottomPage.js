import { useParams, useLocation } from 'react-router-dom'
import { Apiurl, CallBottomDataApi } from "../actions";
import { useState, useEffect } from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from "react-redux";

function BottomPage() {
    const { ID } = useParams();
    const [BottomData, setBottomData] = useState();
    const dispatch = useDispatch();


    const tempBottomData = useSelector(state => state.BottomData);

    useEffect(() => {
        dispatch(CallBottomDataApi(ID));
    }, [])

    useEffect(() => {
        setBottomData(tempBottomData);
    }, [tempBottomData])

    return (
        <Box sx={{ display: 'flex', pt: 5, justifyContent: 'center' }}>
            {BottomData &&
                <Card sx={{ maxWidth: 500, m: 5, display: "flex", flexDirection: "column" }}>
                    <CardMedia
                        component="img"
                        height="auto"
                        image={BottomData.src ? BottomData.src : "https://i.imgur.com/VnF9AkY_d.webp?maxwidth=760&fidelity=grand"}
                        alt="green iguana"
                    />
                    <CardContent sx={{ flex: 1 }}>
                        <Typography gutterBottom variant="h5" component="div">
                            料件名稱:{BottomData.料件名稱}<br />
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            英文名稱:{BottomData.英文名稱}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Stack sx={{flexDirection:"row" , flexWrap:"wrap" , gap: 2}}>
                            <Typography gutterBottom variant="h6" component="div">
                                重量:{BottomData.重量}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                                單位:{BottomData.單位}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                                族群結構編碼:{BottomData.族群結構編碼}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                                零件編號:{BottomData.零件編號}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                                廠家代號:{BottomData.廠家代號}
                            </Typography>
                        </Stack>
                    </CardActions>
                </Card>
            }
        </Box>
    );
}

export default BottomPage;