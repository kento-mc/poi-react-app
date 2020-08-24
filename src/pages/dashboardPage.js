import React, { useEffect, useState, useContext, useRef } from 'react';
import { Header, Loader } from 'semantic-ui-react';
import { AuthContext } from '../contexts/authContext2';
import { PoiContext } from '../contexts/poiContext';
import { FilterContext } from '../contexts/filterContext';
import Template from '../components/templateGlobal';
import AddPoiForm from '../components/addPoiForm';
import FilterBar from '../components/filterBar';
import PoiTabs from '../components/poiTabs';
import Panel from '../components/panel';
import AddCategories from '../components/addCategories';

const DashboardPage = (props) => {

  const [isLoaded, setIsLoaded] = useState(false);

  const authContext = useContext(AuthContext);
  const poiContext = useContext(PoiContext);
  const { displayedPOIs, handleChange } = useContext(FilterContext);
  
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
    if (poiContext.pois.length !== 0) {
      setIsLoaded(true);
    }
  },[poiContext.pois]);

  if (!isLoaded) {
    console.log('Dashboard loading...');
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
        <Header as='h2'>{`${listHeader} (${poiContext.pois.length})`}</Header>
        <FilterBar onUserInput={handleChange} />
        <PoiTabs pois={displayedPOIs(poiContext.userPOIs)} />
      </Panel>
      <Panel columnCount='6' >
        <AddPoiForm />
        <AddCategories />
      </Panel>
    </Template>
  )
};

export default DashboardPage;