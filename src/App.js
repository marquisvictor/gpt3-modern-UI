import React, {useState, useEffect} from 'react';
import axios from 'axios';
import'./App.css';
import { Container, FormControlLabel, FormGroup, styled, Switch } from '@material-ui/core';
import Header from './components/header/Header';
import Definitions from './Definitions/Definitions';


function App() {

 
  // '#282c34'


  return (
      <div style={{height:'100vh', backgroundColor: `${mode ? '#282c34': '#245c36'}`, color:'white', transition: 'all 0.4s linear'}}>  
        Hello world
      </div>
  );
}

export default App;
