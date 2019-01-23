import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Prueba from './components/Prueba';
import Nav from './components/Nav';

const root = document.getElementById("root");

ReactDOM.render(

  <section>
    <Nav />
    <Prueba />
  </section>
 
 
  ,root);

