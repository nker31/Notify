// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/auth/verifyToken", {
          withCredentials: true,
        });
        setIsAuthenticated(res.data.isAuthenticated);
      } catch (err) {
        console.error(err);
        setIsAuthenticated(false);
      }
    };
    verifyToken();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
