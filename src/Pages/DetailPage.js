import Box from "@mui/material/Box";
import * as React from 'react';
import { useEffect } from 'react';
import { CallPostApi, Apiurl , CallCardApi } from "../actions";
import { useParams, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import Cards from "../Components/Cards"

function DetailPage() {
    const datas = useSelector(state => state.Postdata);

    const dispatch = useDispatch();

    const { time } = useParams();
    const { ProdID } = useParams();

    const Pagekey = useLocation().key;
    console.log(Pagekey);

    useEffect(() => { //明天把這個部份放到Redux去
        dispatch(CallCardApi(time));
    }, [Pagekey])

    useEffect(() => {
        dispatch(CallPostApi(time, ProdID));
    }, [Pagekey])
    return (
        <Box sx={{ pl: 10, pt: 10, display: 'flex', flexDirection: 'row', flexWrap: "wrap" }}>
            {
                datas.map((data) => {
                    return <Cards key={data.ID} propdata={data} />
                })
            }
        </Box>
    );
}

export default DetailPage;

