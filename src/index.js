import React from "react";
import ReactDOM from "react-dom";
import 'fomantic-ui-css/semantic.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import AuthContextProvider from './contexts/authContext';
import PoisContextProvider from './contexts/poisContext';
import Router from './components/router';

const App = () => {

  return (
      <AuthContextProvider>
        <PoisContextProvider>
          <Router/>
        </PoisContextProvider>
      </AuthContextProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
