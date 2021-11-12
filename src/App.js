import logo from './logo.svg';
import './App.css';
import React from 'react';
import Nav from './components/Nav/index'
import LandingPage from './components/LandingPage/index';
import Footer from './components/Footer/index';
import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom';
import Contact from './components/Contact/index';
import Projects from './components/Projects/index';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route exact path='/projects' element={<Projects/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
      </div>
    
  
      
   
  );
}

export default App;
