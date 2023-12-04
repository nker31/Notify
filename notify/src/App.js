import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import SignIn from './pages/sign-in-page/SignIn';
import Register from './pages/register-page/Register';
import About from './pages/About-us/about';
import Emergency from './pages/Emergency/emergency'
import EmergencyCard from './components/EmergencyCard';
import Footer from './components/Footer';
import Home from './pages/home/Home';
import Donate from './pages/donate/Donate';
//import { Router } from 'express';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      {/* <Navbar/> */}
      {/* <Emergency/> */}

      <Router>
        <Navbar/>
        <Routes>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<SignIn/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
        <Footer/>
      </Router>
      
      {/* <Register /> */}
      {/* <SignIn /> */}

      {/* <Register/> */}

      {/* <Donate/>
      <SignIn/>
      <Register/> */}

      {/* <Footer/> */}
    </>
  );
}

export default App;
