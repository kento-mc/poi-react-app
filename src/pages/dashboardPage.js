import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/authContext';
import { PoisContext } from '../contexts/poisContext';
import Template from '../components/templateGlobal';
import AddPoiForm from '../components/addPoiForm';
import PoiTabs from '../components/poiTabs';
import Panel from '../components/panel';
import AddCategories from '../components/addCategories';

const DashboardPage = () => {
  
  const authContext = useContext(AuthContext);
  const poisContext = useContext(PoisContext);

  useEffect(() => {
    poisContext.getAllPOIs(authContext.loggedInUser);
  }, [authContext.loggedInUser]);

  return (
    <Template user={authContext.loggedInUser}>
      <Panel columnCount='10' >
        <PoiTabs user ={authContext.loggedInUser} pois={poisContext.userPOIs} />
      </Panel>
      <Panel columnCount='6' >
        <AddPoiForm />
        <AddCategories />
      </Panel>
    </Template>
  )
};

export default DashboardPage;