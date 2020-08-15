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

  useEffect(() => {
    console.log(auth);
    console.log('Inside the authConetext useEffect Hook:')
    console.log(usersByEmail);
    console.log(usersByID);
    if (usersByEmail) {
      const user = usersByEmail.get(auth.email);
      getLoggedIn(user);
    }
  }, [usersByID]);

  useEffect(() => {
    if (loggedInUser) console.log(`${loggedInUser?.fullName} logged in`)
  }, [loggedInUser])

  // const prevAuth = window.localStorage.getItem('auth') || false;
  // const prevAuthBody = window.localStorage.getItem('authBody') || null;

  // const [authenticated, setAuthenticated] = useState(prevAuth);
  // const [authBody, setAuthBody] = useState(prevAuthBody);

  // const submitCredentials = (email, password) => {
  //   setCredentials({email: email, password: password});
  // };

  const updateAuth = (email, auth, token) => {
    setAuth({email: email, status: auth, token: token});
  };

  const usersByEmailSetup = (users) => {
    for (let i = 0; i < users.length; i++) {
      userEmailKeys.set(users[i].email, users[i]);
      userIdKeys.set(users[i]._id, users[i]);
    };
    setUsersByEmail(userEmailKeys);
  }

  const usersByIdSetup = () => {
    setUsersByID(userIdKeys);
  }

  const getLoggedIn = (user) => {
    setLoggedInUser(user);
  };

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
        loggedInUser: loggedInUser,
        updateAuth: updateAuth,
        usersByEmailSetup: usersByEmailSetup,
        usersByIdSetup: usersByIdSetup,
        getLoggedIn: getLoggedIn
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;