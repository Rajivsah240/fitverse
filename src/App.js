import React from 'react';
import {Route,Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import './App.css';
import Home from "./pages/Home";
import Navbar from './components/Navbar';



function App() {
  return (
    <Box> 
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Box>
  );
}

export default App;

