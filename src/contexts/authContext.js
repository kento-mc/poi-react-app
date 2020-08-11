import React, { useEffect, useState, createContext } from 'react';
import { authenticate, getUsers, getUser, getPois } from '../api/poi-api';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {

  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState(null);
  const [users, setUsers] = useState(null);
  const [usersById, setUsersById] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  // const prevAuth = window.localStorage.getItem('auth') || false;
  // const prevAuthBody = window.localStorage.getItem('authBody') || null;

  // const [authenticated, setAuthenticated] = useState(prevAuth);
  // const [authBody, setAuthBody] = useState(prevAuthBody);

  const updateAuth = (auth) => {
    localStorage.setItem('authenticated', auth);
    setAuth(auth)
  };

  const addToken = (token) => {
    localStorage.setItem('token', token);
    setToken(token)
  };

  const authenticate = (email, password) => {
    return authenticate(email, password);
  }

  const getUsers = () => {

  }

  useEffect(() => {
    // localStorage.setItem('authenticated', auth);
    // localStorage.setItem('token', token);

  }, [auth]);

  // const defaultContext = {
  //   authenticated,
  //   setAuthenticated,
  //   authBody,
  //   setAuthBody
  // };

  return (
    <AuthContext.Provider 
      value={{
        auth: auth,
        token: token,
        updateAuth: updateAuth,
        addToken: addToken,
        authenticate: authenticate
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;