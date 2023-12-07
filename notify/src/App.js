import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import SignIn from "./pages/sign-in-page/SignIn";
import Register from "./pages/register-page/Register";
import About from "./pages/About-us/about";
import Emergency from "./pages/Emergency/emergency";
import EmergencyCard from "./components/EmergencyCard";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import Donate from "./pages/donate/Donate";
//import { Router } from 'express';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Cookies from 'js-cookie';
import {AuthProvider} from './AuthContext'

function App() {
  const ProtectedRoute = ({ children }) => {
    const token = Cookies.get('accessToken')
    if (!token) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <>
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<SignIn />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/donate"
            element={
              <ProtectedRoute>
                <Donate />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route
            path="/emergency"
            element={
                <Emergency />
            }
          />
        </Routes>
        <Footer />
      </Router>
      </AuthProvider>
    </>
  );
}

export default App;
