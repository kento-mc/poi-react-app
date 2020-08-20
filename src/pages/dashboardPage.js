import React, { useEffect } from 'react';
import { Header } from 'semantic-ui-react';
import { Redirect } from "react-router-dom";
import Template from '../components/templateGlobal';
import AddPoiForm from '../components/addPoiForm';
import FilterBar from '../components/filterBar';
import PoiTabs from '../components/poiTabs';
import Panel from '../components/panel';
import AddCategories from '../components/addCategories';

const DashboardPage = ({ updateAuth, user, pois, listHeader, handleChange }) => {
  
  useEffect(() => {
    if (!user && localStorage.authenticated) {
      updateAuth(localStorage.email, localStorage.authenticated);
      return <Redirect to='/dashboard' />;
    }  
  }, []) 

  return (
    <Template user={user}>
      <Panel columnCount='10' >
        <Header as='H2'>{`${listHeader} (${pois?.length})`}</Header>
        <FilterBar onUserInput={handleChange} />
        <PoiTabs pois={pois} />
      </Panel>
      <Panel columnCount='6' >
        <AddPoiForm />
        <AddCategories />
      </Panel>
    </Template>
  )
};

export default DashboardPage;