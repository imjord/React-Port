import logo from './logo.svg';
import './App.css';
import React from 'react';
import Nav from './components/Nav/index'
import LandingPage from './components/LandingPage/index';
import Footer from './components/Footer/index';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Resume from './components/Resume/index';
import Projects from './components/Projects/index';
import Skills from './components/Skills';


function App() {

  return (
    <div>
     <BrowserRouter>
      <Nav/>
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route exact path='/Projects' element={<Projects/>}/>
        <Route exact path='/Skills' element={<Skills/>}/>
        <Route exact path='/Resume' element={<Resume/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      </div>
    
  
      
   
  );
}

export default App;
