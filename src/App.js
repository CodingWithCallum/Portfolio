import './App.css';
import React from 'react';
import NavbarV2 from './Components/Navbar/NavbarV2';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppTheme from './Components/Theme/AppTheme';
import { Outlet } from 'react-router';
import Grid from '@mui/material/Grid2';
import Hero from './Components/Hero/Hero';
import Education from './Pages/Education';
import Experience from './Pages/Experience';
import Gaming from './Pages/Experience';
import Project from './Pages/Project';
import Skills from './Pages/Skills';
import { Divider } from '@mui/material';

export default function App(props){
  return (
  <AppTheme {...props}>
      <CssBaseline enableColorScheme/>
      <NavbarV2/>
      <Hero/>
      <div>
          <Divider/>
        <Education/>
          <Divider/>
        <Experience/>
          <Divider/>
        <Gaming/>
          <Divider/>
        <Project/>
          <Divider/>
        <Skills/>
          <Divider/>
      </div>
  </AppTheme>
  )}