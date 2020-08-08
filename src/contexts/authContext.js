import React, { useEffect, useState, createContext } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {

  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState(null);

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

  useEffect(() => {
    window.localStorage.setItem('authenticated', auth);
    window.localStorage.setItem('token', token);
  });

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
        addToken: addToken
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;