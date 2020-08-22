import React, { useState, createContext, useEffect } from "react";
import { authenticate, getUsers, getPois } from '../api/poi-api';

export const AuthContext = createContext(null);

const AuthContextProvider = (props) => {
  const [credentials, setCredentials] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (credentials) getAuth(credentials.email, credentials.password);
  }, [credentials])

  const authenticateUser = (email, password) => {
    setCredentials({ email: email, password: password })
  };

  const getAuth = async (email, password) => {
    // validate user
    try {
      const response = await authenticate(email, password);
      if (response.success) {
        localStorage.setItem('isAuthenticated', response.success);
        localStorage.setItem('token', response.token);
        localStorage.setItem('email', email);
        setIsAuthenticated(true);
      } else {
        alert('Wrong!')
      }
    } catch (e) {
      console.log(e);
    }
  };

  const signout = () => {
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticateUser,
        signout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
