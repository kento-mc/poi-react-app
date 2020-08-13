import React, { useEffect, useState, createContext } from 'react';
import { authenticate, getUser, getUsers, getPois } from '../api/poi-api';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {

  const [auth, setAuth] = useState(null);
  const [allUsers, setAllUsers] = useState(null);
  const [usersByEmail, setUsersByEmail] = useState(null);
  const [usersByID, setUsersByID] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  // const prevAuth = window.localStorage.getItem('auth') || false;
  // const prevAuthBody = window.localStorage.getItem('authBody') || null;

  // const [authenticated, setAuthenticated] = useState(prevAuth);
  // const [authBody, setAuthBody] = useState(prevAuthBody);

  // const submitCredentials = (email, password) => {
  //   setCredentials({email: email, password: password});
  // };

  const updateAuth = (email, auth, token) => {
    localStorage.setItem('authenticated', auth);
    localStorage.setItem('token', token);
    setAuth({email: email, auth: auth, token: token});
  };

  // const getAuth = async (email, password) => {
  //   const response = await authenticate(email, password);
  //   updateAuth(response.success, response.token);
  // };

  // const retrieveUsers = async () => {
  //   const users = await getUsers();
  //   console.log(users);
  //   mapUsers(users);
  //   return users;
  // };

  const getAllUsers = async () => {
    const users = await getUsers();
    setAllUsers(users);
    console.log(allUsers);
    return users;
  };

  const getLoggedIn = (users) => {
    const user = usersByEmail[auth.email];
    return user;
  };

  useEffect(() => {
    // localStorage.setItem('authenticated', auth);
    // localStorage.setItem('token', token);
    if (auth) {
      getAllUsers();
      // const user = getLoggedIn(users);
      // setLoggedInUser(user);
      // console.log(loggedInUser);
    }
  }, [auth]);

  useEffect(() => {
    if (allUsers) {
      const userEmailKeys = new Map();
      const userIdKeys = new Map();
      for (let i = 0; i < allUsers.length; i++) {
        userEmailKeys.set(allUsers[i].email, allUsers[i]);
        userIdKeys.set(allUsers[i]._id, allUsers[i]);
      };
      console.log(userEmailKeys);
      console.log(userIdKeys);
      setUsersByEmail(userEmailKeys);
      setUsersByID(userIdKeys);
      console.log(allUsers);
      console.log(usersByEmail);
      console.log(usersByID);
    }
  }, [allUsers]);

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
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;