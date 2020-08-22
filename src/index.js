import React from "react";
import ReactDOM from "react-dom";
import 'fomantic-ui-css/semantic.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Router from './components/router';

const App = () => {

  return (
    <Router/>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
