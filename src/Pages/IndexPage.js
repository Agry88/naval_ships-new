import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom'
import { useState } from 'react'


function IndexPage() {
    const [SelectValue , setSelectValue] = useState("請選擇:");

    const handleChange = (e) => {
        setSelectValue(e.target.value);
    }

    return (
        <Grid container="true" direction="column">
            <Typography variant="h2" sx={{ pb: 10 }}>
                歡迎進入海軍艦艇裝備數位後勤系統
            </Typography>
            <Grid container="true" justifyContent="center" alignItems="center">
                <Card sx={{ maxWidth: 600, boxShadow: 5 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="auto"
                        image="./Imgs/login.jpeg"
                    />
                    <CardContent container="true" direction="column" alignItems="center">
                        <TextField required
                            id="outlined-required"
                            label="請輸入艦艇名稱"
                            defaultValue="沱江軍艦">
                        </TextField>
                        <Box sx={{ minWidth: 120, pt: 3 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">請選擇:</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={SelectValue}
                                    label="Machine"
                                >
                                    <MenuItem value={handleChange}>柴油主機 V 4000 M93L</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Grid container="true" justifyContent="flex-end" >
                            <Link to="/Second_page" style={{ textDecoration: 'none' }}>
                                <Button variant="outlined" size="large" style={{ color: "#000000", borderColor: "#000000" }}>
                                    確定
                                </Button>
                            </Link>
                        </Grid >
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
}

export default IndexPage;