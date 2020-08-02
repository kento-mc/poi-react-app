import React, { useContext, useEffect, useState } from 'react';
import { getPois } from '../api/poi-api';
import PoisContext from '../contexts/poisContext';
import Template from '../components/templateGlobal';
import AddPoiForm from '../components/addPoiForm';
import PoiTabs from '../components/poiTabs';
import Panel from '../components/panel';
import AddCategories from '../components/addCategories';

const DashboardPage = ({ user }) => {
  
  const context = useContext(PoisContext);

  const [pois, setPois] = useState([]);

  useEffect(() => {
    getPois().then((pois) => {
      console.log(pois);
      setPois(pois);
    });
  }, [pois]);

  const tempUser = {
    firstName: 'Homer',
    lastName: 'Simpson',
    fullName: 'Homer Simpson',
    isAdmin: false
  };

  return (
    <Template user={tempUser}>
      <Panel columnCount='10' >
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