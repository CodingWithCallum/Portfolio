import './App.css';
import React from 'react';
import NavbarV2 from './Components/Navbar/NavbarV2';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppTheme from './Components/Theme/AppTheme';
import { Outlet } from 'react-router';
import Grid from '@mui/material/Grid2';

export default function App(props){
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme/>
      <NavbarV2/>
      <Container maxWidth="lg" component="main" sx={{display:'flex', flexDirection: 'column', my:16, gap:4}}>

      </Container>
    </AppTheme>
  )
}