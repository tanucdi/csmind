import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Count from './components/Count'
import './App.css';

function App() {
  return (
    <> 
    <Header/>  
      <Hero/>
      <About/>
      <Count/>
      </>
  );
}

export default App;
