import React from "react";
import ReactDOM from "react-dom";
import 'fomantic-ui-css/semantic.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import AuthContextProvider from './contexts/authContext';
import PoisContextProvider from './contexts/poisContext';
import CategoriesContextProvider from './contexts/categoriesContext';
import Router from './components/router';

const App = () => {

  return (
      <AuthContextProvider>
        <PoisContextProvider>
          <CategoriesContextProvider>
            <Router/>
          </CategoriesContextProvider>
        </PoisContextProvider>
      </AuthContextProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
