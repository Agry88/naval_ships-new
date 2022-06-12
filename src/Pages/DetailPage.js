import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import * as React from 'react';
import { useEffect, useState } from 'react';
import { CallPostApi, Apiurl, CallCardApi } from "../actions";
import { useParams, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import Cards from "../Components/Cards"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IconButton } from '@mui/material';
import { SetLastDatas } from '../actions';
import AddProd from "../Components/AddProd";

function DetailPage() {
    const datas = useSelector(state => state.Postdata);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const dispatch = useDispatch();

    const { time } = useParams();
    const { ProdID } = useParams();

    const Pagekey = useLocation().key;
    console.log(Pagekey);

    useEffect(() => {
        dispatch(CallCardApi(time));
    }, [Pagekey])

    useEffect(() => {
        dispatch(CallPostApi(time, ProdID));
    }, [Pagekey])


    return (
        <>
            <Box sx={{ pl: 10, pt: 10, display: 'flex', flexDirection: 'row', flexWrap: "wrap" }}>
                {
                    datas.map((data) => {
                        return <Cards key={data.ID} propdata={data} />
                    })
                }
            </Box>
            <IconButton color="primary" sx={{ float: "right", mr: 15 }} onClick={handleOpen}>
                <AddCircleIcon sx={{ width: 100, height: 100 }} />
            </IconButton>
            <Modal
                open={open}
                onClose={handleClose}
                sx={{display:"flex",alignItems:"center",justifyContent:"center"}}
            >
                <AddProd time={time} Pagekey={Pagekey} ProdID={ProdID}/>
            </Modal>
        </>

    );
}

export default DetailPage;

