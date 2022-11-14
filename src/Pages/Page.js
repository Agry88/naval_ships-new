import Box from "@mui/material/Box";
import IndexPage from "./IndexPage";
import Second_page from "./Second_page";
import BottomPage from "./BottomPage";
import DetailPage from "./DetailPage";
import ShoppingPage from "./ShoppingPage";
import Error from "./Error";
import LoginPage from "./LoginPage";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import {
    Route,
    Routes,
    Navigate,
    useNavigate,
} from 'react-router-dom'

function Page() {
    const MemberInfo = useSelector(state => state.Member);
    const navigate = useNavigate();

    useEffect(() => {
        if (MemberInfo.length != 0) {return}
        navigate("/LoginPage");
    }, [])


    return (
        <Box sx={{
            minWidth: "93%",
            minHeight: "100vh",
            background: "#e8e4e3",
            pl: 5,
        }}>
            <Routes>
                <Route path="/" element={<Navigate to="LoginPage" />} />
                <Route path="/LoginPage" element={<LoginPage />} />
                <Route path="/IndexPage" element={<IndexPage />} />
                <Route path="/Second_page" element={<Second_page />} />
                <Route path="/ShoppingPage" element={<ShoppingPage />} />

                <Route path="/BottomPage/:ID" element={<BottomPage />} />
                <Route path="/DetailPage/:time/:ProdID" element={<DetailPage />} />
                <Route path="" element={<Error />} />
            </Routes>
        </Box>
    );
}

export default Page;
