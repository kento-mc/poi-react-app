import React, { useEffect, useState, createContext } from 'react';
import { authenticate, getUsers, getUser, getPois } from '../api/poi-api';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {

  const [credentials, setCredentials] = useState({});
  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState(null);
  const [usersByEmail, setUsersByEmail] = useState(null);
  const [usersByID, setUsersByID] = useState(null);
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
    setAuth(auth);
    setToken(token);
  };

  const getAuth = async (email, password) => {
    const response = await authenticate(email, password);
    updateAuth(response.success, response.token);
  };

  const mapUsers = async () => {
    const users = await getUsers();
    console.log(users);
    const userEmailKeys = new Map();
    const userIdKeys = new Map();
    for (let i = 0; i < users.length; i++) {
    // for (let user of users) {
      userEmailKeys.set(users[i].email, users[i]);
      userIdKeys.set(users[i]._id, users[i]);
    };
    setUsersByEmail(userEmailKeys);
    setUsersByID(userIdKeys);
    console.log(usersByEmail);
    console.log(usersByID);
  };

  useEffect(() => {
    // localStorage.setItem('authenticated', auth);
    // localStorage.setItem('token', token);
    console.log(credentials);
    getAuth(credentials.email, credentials.password);
    mapUsers();
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