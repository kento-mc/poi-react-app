import React, { useContext, useEffect } from 'react';
import { Header } from 'semantic-ui-react';
import { AuthContext } from '../contexts/authContext2';
import { PoiContext } from '../contexts/poiContext';
import Template from '../components/templateGlobal';
import AddPoiForm from '../components/addPoiForm';
import FilterBar from '../components/filterBar';
import PoiTabs from '../components/poiTabs';
import Panel from '../components/panel';
import AddCategories from '../components/addCategories';

const DashboardPage = ({ pois, handleChange }) => {

  const authContext = useContext(AuthContext);
  const poiContext = useContext(PoiContext);
  
  useEffect(() => {
    if (authContext.isAuthenticated) {
      console.log('Logged in user:');
      console.log(authContext.loggedInUser);
      poiContext.getPoiData(authContext.loggedInUser);
    }
  }) 

  let listHeader;
  let poisLength;

  if (poiContext.pois) {
    listHeader = `${ authContext.loggedInUser ? authContext.loggedInUser.firstName + '\'s Points of Interest' : '' }`;
    poisLength = poiContext.pois.length > 0 ? `(${poiContext.pois.length})` : '';
  }

  // if (!poiContext.pois) {
  //   console.log('Dashboard loading...');
  //   console.log(poiContext.pois);
  //   return (
  //     <>
  //       Loading...
  //     </>
  //   )
  // }
  return (
    <Template user={authContext.loggedInUser}>
      <Panel columnCount='10' >
        <Header as='h2'>{`${listHeader} ${poisLength}`}</Header>
        <FilterBar onUserInput={handleChange} />
        <PoiTabs pois={poiContext.pois} />
      </Panel>
      <Panel columnCount='6' >
        <AddPoiForm />
        <AddCategories />
      </Panel>
    </Template>
  )
};

export default DashboardPage;