import React, { useEffect, useState, createContext } from 'react';
import { authenticate, getUser, getUsers, getPois } from '../api/poi-api';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {

  const [auth, setAuth] = useState(null);
  const [usersByEmail, setUsersByEmail] = useState(null);
  const [usersByID, setUsersByID] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const userEmailKeys = new Map();
  const userIdKeys = new Map();

  // const prevAuth = window.localStorage.getItem('auth') || false;
  // const prevAuthBody = window.localStorage.getItem('authBody') || null;

  // const [authenticated, setAuthenticated] = useState(prevAuth);
  // const [authBody, setAuthBody] = useState(prevAuthBody);

  // const submitCredentials = (email, password) => {
  //   setCredentials({email: email, password: password});
  // };

  const updateAuth = (email, auth, token) => {
    setAuth({email: email, auth: auth, token: token});
  };

  const usersByEmailSetup = (users) => {
    for (let i = 0; i < users.length; i++) {
      userEmailKeys.set(users[i].email, users[i]);
      userIdKeys.set(users[i]._id, users[i]);
    };
    setUsersByEmail(userEmailKeys);
  }

  const usersByIdSetup = (users) => {
    setUsersByID(userIdKeys);
  }

  const getLoggedIn = () => {
    const user = usersByEmail[auth.email];
    setLoggedInUser(user);
  };

  useEffect(() => {
    if (auth) {
      getLoggedIn();
    }
    // localStorage.setItem('authenticated', auth);
    // localStorage.setItem('token', token);
    
    console.log('Inside the authConetext useEffect Hook:')
    console.log(usersByEmail);
    console.log(usersByID);
    // console.log(`${loggedInUser.fullName} logged in`)
  
  }, [usersByID]);

  // const defaultContext = {
  //   authenticated,
  //   setAuthenticated,
  //   authBody,
  //   setAuthBody
  // };

  return (
    <AuthContext.Provider 
      value={{
        auth: auth?.auth,
        token: auth?.token,
        updateAuth: updateAuth,
        usersByEmailSetup: usersByEmailSetup,
        usersByIdSetup: usersByIdSetup,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;