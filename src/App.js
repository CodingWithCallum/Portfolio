import './App.css';
import React from 'react';
import NavbarV2 from './Components/Navbar/NavbarV2';
import CssBaseline from '@mui/material/CssBaseline';
import AppTheme from './Components/Theme/AppTheme';
import Hero from './Components/Hero/Hero';
import HomeContext from './Components/HomeContext/HomeContext';

export default function App(props){
  return (
  <AppTheme {...props}>
      <CssBaseline enableColorScheme/>
      <NavbarV2/>
      <Hero/>
      <HomeContext/>
  </AppTheme>
  )}