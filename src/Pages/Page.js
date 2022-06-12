import Box from "@mui/material/Box";
import IndexPage from "./IndexPage";
import Second_page from "./Second_page";
import BottomPage from "./BottomPage";
import DetailPage from "./DetailPage";
import Error from "./Error";
import LoginPage from "./LoginPage";

import {
    Route,
    Routes,
    Navigate ,
} from 'react-router-dom'

function Page() {

    return (
        <Box sx={{
            minWidth: "93%",
            minHeight: "100vh",
            background: "#e8e4e3",
            pl: 5,
        }}>
            <Routes>
                <Route path="/" element={<Navigate to="LoginPage"/>} />
                <Route path="/LoginPage" element={<LoginPage />} />
                <Route path="/IndexPage" element={<IndexPage />} />
                <Route path="/Second_page" element={<Second_page />} />
                <Route path="/BottomPage/:ID" element={<BottomPage />} />
                <Route path="/DetailPage/:time/:ProdID" element={<DetailPage />} />
                <Route path="" element={<Error />} />
            </Routes>
        </Box>
    );
}

export default Page;
