import React, { useContext, useEffect, useState, useRef } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import PrivateRoute from '../privateRoute';
import { AuthContext } from '../../contexts/authContext2';
import { PoiContext } from '../../contexts/poiContext';
import DashboardPage from '../../pages/dashboardPage';
import PoiListPage from '../../pages/poiListPage';
import PoiDetailPage from '../../pages/poiDetailPage';
import SettingsPage from '../../pages/settingsPage';
import LoginPage from '../../pages/loginPage';
import SignupPage from '../../pages/signupPage';

const Router = (props) => {

  // const authContext = useContext(AuthContext);
  // const poiContext = useContext(PoiContext);
  
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [poiFilter, setPoiFilter] = useState("");
  // const [categoryFilter, setCategoryFilter] = useState("");
  // const [contributorFilter, setContributorFilter] = useState("");

  // const isMounted = useRef(null);
  // const categoryCount = categoryFilter.length;
  // // let listHeader = `${ authContext.loggedInUser ? authContext.loggedInUser.firstName + '\'s Points of Interest' : '' }`;
  // const listHeader = 'Homer\'s Points of Interest';

  // useEffect(() => {
  //   isMounted.current = true;
  //   if (authContext.loggedInUser && isMounted.current) {
  //     console.log('Logged in user from Router:');
  //     console.log(authContext.loggedInUser);
  //     const setPOIs = async () => {
  //       const { pois, cats } = await poiContext.getPoiData(authContext.loggedInUser);
  //       poiContext.setPOIs(pois);
  //       poiContext.setCategories(cats);
  //       poiContext.setUserPOIs(authContext.loggedInUser, pois);
  //       poiContext.setUserCategories(authContext.loggedInUser, cats);
  //     }
  //     try {
  //       setPOIs();
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  //   return () => isMounted.current = false;
  // },[authContext.loggedInUser]);

  // const displayedPOIs = (pois) => {
  //   const filteredPOIs = pois
  //     .filter(poi => {
  //       return poi.name.toLowerCase().search(poiFilter.toLowerCase()) !== -1 ||
  //              poi.description.toLowerCase().search(poiFilter.toLowerCase()) !== -1;
  //     })
  //     .filter(poi => {
  //       return poi.contributor.fullName.search(contributorFilter) !== -1;
  //     });

  //     let catFiltered = []

  //     if (categoryCount > 0) {

  //       for (let poi of filteredPOIs) {
  //         let included = 0;
  //         for (let cat of categoryFilter) {
  //           for (let poiCat of poi.categories) {
  //             if (poiCat.name === cat) {
  //               included++;
  //             }
  //           }            
  //         }
  //         if (included === categoryFilter.length) {
  //           catFiltered.push(poi);
  //         }
  //       }
  //     } else {
  //       catFiltered = [...filteredPOIs];
  //     }
  //   return catFiltered;
  // }

  // let userPOIs = displayedPOIs(poiContext.userPOIs);
  // let allPOIs = displayedPOIs(poiContext.pois);

  // const handleChange = (type, value) => {
  //   if (type === 'name') {
  //     setPoiFilter(value) 
  //   } else if (type === 'category') {
  //     setCategoryFilter(value);
  //   } else {
  //     setContributorFilter(value);
  //   }
  // };

  // useEffect (() => {
  //   if (poiContext.userPOIs.length !== 0) {
  //     setIsLoaded(true);
  //   }
  // },[poiContext.userPOIs]);

  // if (!isLoaded) {
  //   console.log('Dashboard loading...');
  //   return (
  //     <Template user ={authContext.loggedInUser}>
  //       <Panel columnCout ='16'>
  //         <Loader active inline='centered' size='large'/>
  //       </Panel>
  //     </Template>
  //   )
  // }
  // return (
  //   <Switch>
  //     {/* <PrivateRoute path='/dashboard' component={DashboardPage} />
  //     <PrivateRoute path='/pois' component={PoiListPage} /> */}
  //     <PrivateRoute 
  //       exact path={"/dashboard"}
  //       render={props => {
  //         return <DashboardPage {...props}
  //           user={authContext.loggedInUser} 
  //           pois={userPOIs}
  //           listHeader={listHeader}
  //           handleChange={handleChange} 
  //         />
  //       }}
  //     />
  //     <PrivateRoute 
  //       exact path={"/pois"}
  //       render={props => {
  //         return <PoiListPage {...props} 
  //           user={authContext.loggedInUser} 
  //           pois={allPOIs}
  //           listHeader={listHeader}
  //           handleChange={handleChange} 
  //         />
  //       }}
  //     />
  //     <PrivateRoute path="/pois/:id" component={PoiDetailPage} />
  //     <PrivateRoute path="/pois/:id/update" component={PoiDetailPage} />
  //     <PrivateRoute path="/pois/:id/images" component={PoiDetailPage} />
  //     <PrivateRoute path="/pois/:id/images/:image" component={PoiDetailPage} />
  //     <PrivateRoute exact path="/settings" component={SettingsPage} />
  //     <Route exact path="/login" component={LoginPage} />
  //     <Route exact path="/signup" component={SignupPage} />
  //     <Route exact path="/signup" component={SignupPage} />
  //     <PrivateRoute 
  //       exact path={"/"}
  //       render={props => {
  //         return <DashboardPage {...props}
  //           user={authContext.loggedInUser} 
  //           pois={userPOIs}
  //           listHeader={listHeader}
  //           handleChange={handleChange} 
  //         />
  //       }}
  //     />
  //     <Redirect from="*" to="/" />
  //   </Switch>
  // );
};

export default Router;