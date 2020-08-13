import React, { useContext } from "react";
import ReactDOM from "react-dom";
import 'fomantic-ui-css/semantic.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import AuthContextProvidder from './contexts/authContext';
import PoisContextProvider from './contexts/poisContext';
import DashboardPage from "./pages/dashboardPage";
import PoiListPage from "./pages/poiListPage";
import PoiDetailPage from "./pages/poiDetailPage";
import SettingsPage from './pages/settingsPage';
import LoginPage from './pages/loginPage';
import SignupPage from './pages/signupPage';

const App = () => {

  const user = {
    firstName: 'Homer',
    lastName: 'Simpson',
    fullName: 'Homer Simpson',
    isAdmin: false
  };

  return (
    <BrowserRouter>
      <AuthContextProvidder>
        <PoisContextProvider>
          <Switch>
            <Route exact path="/dashboard" component={DashboardPage} />
            <Route exact path="/pois" component={PoiListPage} />
            <Route path="/pois/:id" component={PoiDetailPage} />
            <Route path="/pois/:id/update" component={PoiDetailPage} />
            <Route path="/pois/:id/images" component={PoiDetailPage} />
            <Route path="/pois/:id/images/:image" component={PoiDetailPage} />
            <Route exact path="/settings" component={SettingsPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route path="/" component={user ? DashboardPage : LoginPage} />
            <Redirect from="*" to="/" />
          </Switch>
        </PoisContextProvider>
      </AuthContextProvidder>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));