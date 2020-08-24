import React, { useState, createContext, useEffect, useRef } from "react";
import { authenticate, getUsers } from '../api/poi-api';

export const AuthContext = createContext(null);

const AuthContextProvider = (props) => {
  const [credentials, setCredentials] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [users, setUsers] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState();

  const isMounted = useRef(null);

  useEffect(() => {
    isMounted.current = true;
    if (credentials && isMounted.current) getAuth(credentials.email, credentials.password);
    
    return () => isMounted.current = false;
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
        setLoggedInUser(response.user);
        console.log('API response user:');
        console.log(response.user);
      } else {
        alert('Wrong!')
      }
    } catch (e) {
      console.log(e);
    }
    try {
      const users = await getUsers();
      setUsers(users);
    } catch (e) {
      console.log(e);
    }
  };

  const signout = () => {
    setCredentials(null);
    setIsAuthenticated(false);
    setLoggedInUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        users,
        loggedInUser,
        authenticateUser,
        signout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
