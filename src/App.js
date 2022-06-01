import React from 'react'
import { useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Page from "./Pages/Page";
import Sidebar from "./Components/Sidebar";
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'
import { useDispatch  } from "react-redux";
import { CallGetApi } from "./actions";


function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(CallGetApi());
  },[])

  return (
    <div className="App">
      <Router>
        <Stack direction="row" spacing={11.5} sx={{ minWidth: "100vh" }}>
          <Sidebar />
          <Page />
        </Stack>
      </Router>
    </div>
  );
}

export default App;




