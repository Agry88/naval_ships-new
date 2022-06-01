import Box from "@mui/material/Box";
import * as React from 'react';
import { useEffect } from 'react';
import { CallPostApi, Apiurl } from "../actions";
import { useParams, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import Cards from "../Components/Cards"

function DetailPage() {
    const datas = useSelector(state => state.Postdata);
    const [nextDatas, setnextDatas] = React.useState();

    const dispatch = useDispatch();

    const { time } = useParams();
    const { ProdID } = useParams();

    const Pagekey = useLocation().key;
    console.log(Pagekey);

    useEffect(() => {
        const newApiurl = Apiurl + "?way=附屬零件" + (Number(time) + 1);
        return () => {
            fetch(newApiurl, { method: 'POST' })
                .then(response => response.json())
                .then(datas => {
                    setnextDatas(datas);
                })
                .catch(e => {
                    console.log("error occured");
                });
        }
    }, [Pagekey])

    useEffect(() => {
        dispatch(CallPostApi(time, ProdID));
    }, [Pagekey])
    return (
        <Box sx={{ pl: 10, pt: 10, display: 'flex', flexDirection: 'row', flexWrap: "wrap" }}>
            {
                datas.map((data) => {
                    return <Cards key={data.ID} propdata={data} nextDatas={nextDatas} />
                })
            }
        </Box>
    );
}

export default DetailPage;

