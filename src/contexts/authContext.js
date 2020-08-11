import React, { useEffect, useState, createContext } from 'react';
import { authenticate, getUsers, getUser, getPois } from '../api/poi-api';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {

  const [credentials, setCredentials] = useState({});
  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState(null);
  const [users, setUsers] = useState(null);
  const [usersById, setUsersById] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  // const prevAuth = window.localStorage.getItem('auth') || false;
  // const prevAuthBody = window.localStorage.getItem('authBody') || null;

  // const [authenticated, setAuthenticated] = useState(prevAuth);
  // const [authBody, setAuthBody] = useState(prevAuthBody);

  const submitCredentials = (email, password) => {
    setCredentials({email: email, password: password});
  };

  const updateAuth = (auth, token) => {
    localStorage.setItem('authenticated', auth);
    localStorage.setItem('token', token);
    setAuth(auth)
    setToken(token)
  };

  // const getAuth = async (email, password) => {
  //   let response = await authenticate(email, password);
  //   response = await response.json();
  //   setAuth(response);
  // };

  useEffect(() => {
    // localStorage.setItem('authenticated', auth);
    // localStorage.setItem('token', token);
    console.log(credentials);
    const getAuth = async (email, password) => {
      const response = await authenticate(email, password);
      setAuth(response.success);
      setToken(response.token);
    };
    getAuth();
    console.log(auth, token);
  }, [credentials]);

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
        submitCredentials: submitCredentials
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;