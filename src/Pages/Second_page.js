
import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom'
import Carousels from "../Components/Carousels";


function Second_page() {
    return (
        <Grid container justifyContent="center" sx={{pt:10}}>
            <Card sx={{ maxWidth: 600, boxShadow: 5}}>
                <CardMedia
                    component={Carousels}
                />
                <CardContent container direction="column" alignItems="center">
                    <Typography variant="body">
                        目前選取組件:MTU V4000 M33L 柴油主機
                    </Typography>
                </CardContent>
                <CardActions>
                    <Grid container justifyContent="flex-end" >
                        <Link to="/DetailPage" style={{ textDecoration: 'none' }}>
                            <Button variant="outlined" size="large" style={{ color: "#000000", borderColor: "#000000" }}>
                                確定
                            </Button>
                        </Link>
                    </Grid >
                </CardActions>
            </Card>
        </Grid>
    );
}

export default Second_page;