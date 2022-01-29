import './App.css';
import * as React from 'react';
import Menu from './Menu.js';
import TextField from '@mui/material/TextField';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu></Menu>
      </header>
      <TextField id="outlined-basic" label="Search" variant="outlined" />
    </div>
  );
}

export default App;
