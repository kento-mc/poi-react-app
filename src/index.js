import React from "react";
import ReactDOM from "react-dom";
import 'fomantic-ui-css/semantic.css';
import 'leaflet/dist/leaflet.css';
import { BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import PrivateRoute from './components/privateRoute';
import AuthContextProvider from './contexts/authContext';
import PoiContextProvider from './contexts/poiContext';
import FilterContextProvider from './contexts/filterContext';
import DashboardPage from './pages/dashboardPage';
import PoiListPage from './pages/poiListPage';
import PoiDetailPage from './pages/poiDetailPage';
import PoiImagePage from './pages/poiImagePage';
import SettingsPage from './pages/settingsPage';
import LoginPage from './pages/loginPage';
import SignupPage from './pages/signupPage';

const App = () => {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <PoiContextProvider>
          <FilterContextProvider>
            <Switch>
              <PrivateRoute path='/dashboard' component={DashboardPage} />
              <PrivateRoute exact path='/pois' component={PoiListPage} />
              <PrivateRoute exact path="/pois/:id" component={PoiDetailPage} />
              {/* <PrivateRoute exact path="/pois/:id/update" component={PoiDetailPage} /> */}
              {/* <PrivateRoute exact path="/pois/:id/images" component={PoiDetailPage} /> */}
              <PrivateRoute exact path="/pois/:id/images/:image" component={PoiImagePage} />
              <PrivateRoute exact path="/settings" component={SettingsPage} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/signup" component={SignupPage} />
              <Redirect from='/' to='/dashboard' />
              <Redirect from="*" to="/" />
            </Switch>
          </FilterContextProvider>
        </PoiContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
