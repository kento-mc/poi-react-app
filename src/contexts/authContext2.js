import React, { useState, createContext, useEffect, useReducer, useRef } from "react";
import { authenticate, getUsers } from '../api/poi-api';

export const AuthContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load-from-local":
      return JSON.parse(localStorage.getItem('auth-state'));
    case "load-credentials":
      return { 
        credentials: {...action.payload.credentials},
        isAuthenticated: state.isAuthenticated,
        users: [...state.users],
        loggedInUser: state.loggedInUser
      };
    case "load-auth":
      return { 
        credentials: state.credentials,
        isAuthenticated: action.payload.auth,
        users: [...state.users],
        loggedInUser: state.loggedInUser
      };
    case "load-users":
      return { 
        credentials: state.credentials,
        isAuthenticated: state.isAuthenticated,
        users: [...action.payload.users],
        loggedInUser: state.loggedInUser
      };
    case "load-user":
      return { 
        credentials: state.credentials,
        isAuthenticated: state.isAuthenticated,
        users: [...state.users],
        loggedInUser: action.payload.user
      };
    default:
      return state;
  }
};

const AuthContextProvider = (props) => {

  const initialState = localStorage.getItem('auth-state')
  ? JSON.parse(localStorage.getItem('auth-state'))
  : { 
      credentials: null,
      isAuthenticated: false,
      users: [],
      loggedInUser: null
    };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('auth-state', JSON.stringify(state));
  })

  const isMounted = useRef(null);

  useEffect(() => {
    isMounted.current = true;
    if (state.credentials && isMounted.current) {
      getAuth(state.credentials.email, state.credentials.password);
    }  
    return () => isMounted.current = false;
  }, [state.credentials])

  const authenticateUser = (email, password) => {
    setCredentials({ email: email, password: password })
  };

  const getAuth = async (email, password) => {
    if (JSON.parse(localStorage.getItem('poi-state')).pois.length === 0 ) {
      // validate user
      try {
        const response = await authenticate(email, password);
        if (response.success) {
          localStorage.setItem('isAuthenticated', response.success);
          localStorage.setItem('token', response.token);
          localStorage.setItem('email', email);
          localStorage.setItem('user-state', JSON.stringify(response.user));
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
    } else {
      console.log('Loading from local...')
      setFromLocalStorage();
    }
  };

  const signout = () => {
    setCredentials(null);
    setIsAuthenticated(false);
    setLoggedInUser(null);
  }

  const setFromLocalStorage = () => {
    dispatch({ type: "load-from-local", payload: JSON.parse(localStorage.getItem('poi-state'))});
  };

  const setCredentials = (credentials) => {
    dispatch({ type: "load-credentials", payload: { credentials } })
  }

  const setIsAuthenticated = (auth) => {
    dispatch({ type: "load-auth", payload: { auth } })

  };

  const setUsers = (users) => {
    dispatch({ type: "load-users", payload: { users } })

  };

  const setLoggedInUser = (user) => {
    dispatch({ type: "load-user", payload: { user } })

  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        users: state.users,
        loggedInUser: state.loggedInUser,
        authenticateUser,
        signout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
