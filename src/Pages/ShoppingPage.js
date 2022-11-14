import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import del from '../Imgs/del.svg';
const  MediaCard = (props)=> {
  console.log(props.data[0].name)
    return (
      <Card sx={{minHeight:250, maxWidth: 345 ,marginRight:'20px',maxHeight:400,marginTop:'20px'}}>
        <CardMedia
          component="img"
          height="80%"
          image={props.data[0].src}
          alt="green iguana"
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div"
          style={{display:'flex',justifyContent:'space-between'}}>
            {props.data[0].name}
            <button onClick={(e)=>props.click(e,props.data[0].name)}>
                <img src={del} alt="canhere" style={{height:'30px',width:'30px', }}/>
            </button>
            
          </Typography>
          
        </CardContent>
      </Card>
    );
  }
function ShoppingPage() {
    const [data, setdata] = useState(0);
    const [del, setdel] = useState(0);
    const handleclickdel=(e,aa)=>{
        e.preventDefault();
        localStorage.removeItem(aa);
        setdel(1)
    }
    const handleclickdelall=(e)=>{
        e.preventDefault();
        localStorage.clear();
        alert("已完成申購")
        setdel(1)
    }
    useEffect(() => {
        let archive = [];
        for (let i = 0; i < localStorage.length; i++) {
            archive[i] = JSON.parse(localStorage.getItem(localStorage.key(i)));
        }
        setdata(archive);
    }, [])
    useEffect(() => {
        let archive = [];
        for (let i = 0; i < localStorage.length; i++) {
            archive[i] = JSON.parse(localStorage.getItem(localStorage.key(i)));
        }
        setdata(archive);
        setdel(0)
    }, [del])
    console.log(data)
   return(
        <div style={{display:'flex',flexDirection:'column',justifyContent:"space-between",height:"80%"}}>
            <h1>已申購項目</h1>
            <div style={{display:'flex',flexDirection:'row'}}>
                {data?data.map((item,index)=>{
                    return(
                        <MediaCard  key={index} data={item} click={handleclickdel}/>
                    )
                }):null}
            </div>
            <div>
                {data?<Button sx={{backgroundColor:"#FFFFFF"}} variant="outlined" size="large" onClick={e=>handleclickdelall(e)}>送出</Button>:null}
            </div>
           
   
        </div>
   );
     
}

export default ShoppingPage;


