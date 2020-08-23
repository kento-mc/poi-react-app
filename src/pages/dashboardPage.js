import React, { useContext, useEffect, useState, useRef } from 'react';
import { Header, Image, Loader, Dimmer } from 'semantic-ui-react';
import { AuthContext } from '../contexts/authContext2';
import { PoiContext } from '../contexts/poiContext';
import Template from '../components/templateGlobal';
import AddPoiForm from '../components/addPoiForm';
import FilterBar from '../components/filterBar';
import PoiTabs from '../components/poiTabs';
import Panel from '../components/panel';
import AddCategories from '../components/addCategories';

const DashboardPage = ({ handleChange }) => {

  const [isLoaded, setIsLoaded] = useState(false);

  const authContext = useContext(AuthContext);
  const poiContext = useContext(PoiContext);
  
  let listHeader = `${ authContext.loggedInUser ? authContext.loggedInUser.firstName + '\'s Points of Interest' : '' }`;

  useEffect(() => {
    console.log('Logged in user from Dashboard:');
    console.log(authContext.loggedInUser);
    const setPOIs = async () => {
      const { pois, cats } = await poiContext.getPoiData(authContext.loggedInUser);
      poiContext.setPOIs(pois);
      poiContext.setCategories(cats);
      poiContext.setUserPOIs(authContext.loggedInUser, pois);
      poiContext.setUserCategories(authContext.loggedInUser, cats);
    }
    try {
      setPOIs();
    } catch (e) {
      console.log(e);
    }
  },[]);

  useEffect (() => {
    if (poiContext.userPOIs.length !== 0) {
      console.log('There are some user pois!');
      console.log(poiContext.userPOIs);
      setIsLoaded(true);
    }
  },[poiContext.userPOIs]);


  // useEffect(() => {
  //   if (authContext.isAuthenticated) {
  //     console.log('Logged in user from Dashboard:');
  //     console.log(authContext.loggedInUser);
  //     poiContext.getPoiData(authContext.loggedInUser);
  //   }
  // },[authContext.loggedInUser]) 

  // useEffect(() => {
  //   if (poiContext.userPOIs !== undefined) {
  //     listHeader = `${ authContext.loggedInUser ? authContext.loggedInUser.firstName + '\'s Points of Interest' : '' }`;
  //     poisLength = poiContext.pois.length > 0 ? `(${poiContext.pois.length})` : '';
  //     userPOIs = poiContext.userPOIs;
  //     console.log('lllllll');
  //     console.log(userPOIs);
  //   }
  //   setIsLoaded(true);
  // },[poiContext.userPOIs]);

  // if (poiContext.userPOIs) {
  //   listHeader = `${ authContext.loggedInUser ? authContext.loggedInUser.firstName + '\'s Points of Interest' : '' }`;
  //   poisLength = poiContext.pois.length > 0 ? `(${poiContext.pois.length})` : '';
  //   userPOIs = poiContext.userPOIs;
  //   console.log('lllllll');
  //   console.log(userPOIs);
  // }

  if (!isLoaded) {
    console.log('Dashboard loading...');
    console.log(poiContext.pois);
    return (
      <Template user ={authContext.loggedInUser}>
        <Panel columnCout ='16'>
          <Loader active inline='centered' size='large'/>
        </Panel>
      </Template>
    )
  }
  return (
    <Template user={authContext.loggedInUser}>
      <Panel columnCount='10' >
        <Header as='h2'>{`${listHeader} (${poiContext.userPOIs.length})`}</Header>
        <FilterBar onUserInput={handleChange} />
        <PoiTabs pois={poiContext.userPOIs} />
      </Panel>
      <Panel columnCount='6' >
        <AddPoiForm />
        <AddCategories />
      </Panel>
    </Template>
  )
};

export default DashboardPage;