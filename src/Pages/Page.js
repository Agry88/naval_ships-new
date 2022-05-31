import Box from "@mui/material/Box";
import IndexPage from "./IndexPage";
import Second_page from "./Second_page";
import DetailPage from "./DetailPage";
import Error from "./Error";
import {
    Route,
    Routes,
} from 'react-router-dom'

function Page() {
    return (
        <Box sx={{
            minWidth: "93%",
            minHeight: "100vh",
            background: "#e8e4e3",
            pl:5,
        }}>
            <Routes>
                <Route path="/IndexPage" element={<IndexPage />} />
                <Route path="/Second_page" element={<Second_page />} />
                <Route path="/DetailPage" element={<DetailPage />} />
                <Route path="" element={<Error />} />
            </Routes>
        </Box>
    );
}

export default Page;
