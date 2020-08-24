import React, { useContext} from "react";
import { Route, Redirect } from "react-router-dom";
// import { AuthContext } from '../../contexts/authContext2';

const PrivateRoute = props => {

  // const authContext = useContext(AuthContext)
  
  // Destructure props from <privateRoute> 
  const { component: Component, ...rest } = props;
  console.log(props.location)
  return localStorage.isAuthenticated ? (
    <Route {...rest} render={props => <Component {...props} />} />
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: { from: props.location }
      }}
    />
  );
};

export default PrivateRoute;
