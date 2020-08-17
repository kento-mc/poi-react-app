import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { AuthContext } from '../../contexts/authContext';
import { PoisContext } from '../../contexts/poisContext';
import DashboardPage from '../../pages/dashboardPage';
import PoiListPage from "../../pages/poiListPage";
import PoiDetailPage from "../../pages/poiDetailPage";
import SettingsPage from '../../pages/settingsPage';
import LoginPage from '../../pages/loginPage';
import SignupPage from '../../pages/signupPage';

const Router = (props) => {

  const authContext = useContext(AuthContext);
  const poisContext = useContext(PoisContext);
  
  const [poiFilter, setPoiFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("0");
  
  const catCount = Number(categoryFilter);
  const listHeader = `${ authContext.loggedInUser ? authContext.loggedInUser.firstName + '\'s Points of Interest' : '' }`;

  useEffect(() => {
    poisContext.getAllPOIs(authContext.loggedInUser);
  }, [authContext.loggedInUser]);

  let displayedPOIs = poisContext.userPOIs
    .filter(poi => {
      return poi.name.toLowerCase().search(poiFilter.toLowerCase()) !== -1;
    })
    .filter(poi => {
      return  catCount > 0
        ? poi.categories.includes(Number(categoryFilter))
        : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setPoiFilter(value);
    else setCategoryFilter(value);
  };

  return (
      <BrowserRouter>
        <Switch>
          <Route 
            exact path={"/dashboard"}
            render={props => {
              return <DashboardPage {...props} 
                user={authContext.loggedInUser} 
                pois={displayedPOIs}
                listHeader={listHeader}
                catCount={catCount} 
                handleChange={handleChange} 
              />
            }}
          />
          <Route 
            exact path={"/pois"}
            render={props => {
              return <PoiListPage {...props} 
                user={authContext.loggedInUser} 
                pois={displayedPOIs}
                listHeader={listHeader}
                catCount={catCount} 
                handleChange={handleChange} 
              />
            }}
          />
          <Route path="/pois/:id" component={PoiDetailPage} />
          <Route path="/pois/:id/update" component={PoiDetailPage} />
          <Route path="/pois/:id/images" component={PoiDetailPage} />
          <Route path="/pois/:id/images/:image" component={PoiDetailPage} />
          <Route exact path="/settings" component={SettingsPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route path="/" component={authContext.loggedInUser ? DashboardPage : LoginPage} />
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
  );
};

export default Router;