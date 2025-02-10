import './App.css';
import * as React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Grid from '@mui/material/Grid2';

function App() {
  return (
    <Grid container>        
      <Navbar/>
      <Outlet/>
    </Grid>
  );
}

export default App;
