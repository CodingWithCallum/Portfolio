import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Button variant="contained">Hello world</Button>
      <Navbar/>
    </div>
  );
}

export default App;
