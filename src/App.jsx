import React, { useState } from 'react'
import axios from 'axios'
import Movie from './components/Movie';
import "./App.css";
import heroImage from './assets/hero.png';
import {HashRouter, Navigate, Route, Routes} from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

function App(){
  return(
  <HashRouter>
    <Navigation />
    <Routes>
      <Route path='/' exact={true} Component={Home}/>
      <Route path='/about' Component={About}/>
      <Route path='/movie-detail' Component={Detail}/>
    </Routes>
  </HashRouter>
  );
}


export default App;
