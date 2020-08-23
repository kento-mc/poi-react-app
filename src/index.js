import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import 'fomantic-ui-css/semantic.css';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import PrivateRoute from './components/privateRoute';
import AuthContextProvider, { AuthContext } from './contexts/authContext2';
import PoiContextProvider, { PoiContext } from './contexts/poiContext';
import DashboardPage from './pages/dashboardPage';
import PoiListPage from "./pages/poiListPage";
import PoiDetailPage from './pages/poiDetailPage';
import SettingsPage from './pages/settingsPage';
import LoginPage from './pages/loginPage';
import SignupPage from './/pages/signupPage';

const App = () => {

  const authContext = useContext(AuthContext);
  const poiContext = useContext(PoiContext);
  
  const [poiFilter, setPoiFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [contributorFilter, setContributorFilter] = useState("");

  const categoryID = categoryFilter.length;
  // const listHeader = `${ authContext.loggedInUser ? authContext.loggedInUser.firstName + '\'s Points of Interest' : '' }`;
  const listHeader = 'Homer\'s Points of Interest';

  // useEffect(() => {
  //   if (authContext.loggedInUser) {
  //     const getPoisCats = async (user) => {
  //       await poiContext.getAllPOIs(user);
  //     }
  //     getPoisCats(authContext.loggedInUser);
  //   }
  // }, [authContext.loggedInUser]);

  const displayedPOIs = (pois) => {
    const filteredPOIs = pois
      .filter(poi => {
        return poi.name.toLowerCase().search(poiFilter.toLowerCase()) !== -1 ||
               poi.description.toLowerCase().search(poiFilter.toLowerCase()) !== -1;
      })
      .filter(poi => {
        return poi.contributor.fullName.search(contributorFilter) !== -1;
      });

      let catFiltered = []

      if (categoryID > 0) {

        for (let poi of filteredPOIs) {
          let included = 0;
          for (let cat of categoryFilter) {
            for (let poiCat of poi.categories) {
              if (poiCat.name === cat) {
                included++;
              }
            }            
          }
          if (included === categoryFilter.length) {
            catFiltered.push(poi);
          }
        }
      } else {
        catFiltered = [...filteredPOIs];
      }
    return catFiltered;
  }

  let userPOIs;
  let allPOIs;
  if (poiContext) {
    userPOIs = displayedPOIs(poiContext.userPOIs);
    allPOIs = displayedPOIs(poiContext.pois);
  }
  const handleChange = (type, value) => {
    if (type === 'name') {
      setPoiFilter(value) 
    } else if (type === 'category') {
      setCategoryFilter(value);
    } else {
      setContributorFilter(value);
    }
  };

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <PoiContextProvider>
          <Switch>
            {/* <PrivateRoute path='/dashboard' component={DashboardPage} />
            <PrivateRoute path='/pois' component={PoiListPage} /> */}
            <PrivateRoute 
              exact path={"/dashboard"}
              render={props => {
                return <DashboardPage {...props}
                  updateAuth={authContext.updateAuth} 
                  user={authContext.loggedInUser} 
                  pois={userPOIs}
                  listHeader={listHeader}
                  handleChange={handleChange} 
                />
              }}
            />
            <PrivateRoute 
              exact path={"/pois"}
              render={props => {
                return <PoiListPage {...props} 
                  updateAuth={authContext.updateAuth} 
                  user={authContext.loggedInUser} 
                  pois={allPOIs}
                  listHeader={listHeader}
                  handleChange={handleChange} 
                />
              }}
            />
            <PrivateRoute path="/pois/:id" component={PoiDetailPage} />
            <PrivateRoute path="/pois/:id/update" component={PoiDetailPage} />
            <PrivateRoute path="/pois/:id/images" component={PoiDetailPage} />
            <PrivateRoute path="/pois/:id/images/:image" component={PoiDetailPage} />
            <PrivateRoute exact path="/settings" component={SettingsPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignupPage} />
            <PrivateRoute path="/" component={DashboardPage} />
            <Redirect from="*" to="/" />
          </Switch>
        </PoiContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
