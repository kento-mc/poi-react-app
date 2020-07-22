import React from 'react';
import Template from '../components/templateGlobal';
import AddPoiForm from '../components/addPoiForm';
import PoiTabs from '../components/poiTabs';
import Panel from '../components/panel';
import AddCategories from '../components/addCategories';

const DashboardPage = ({ user, pois }) => {

  return (
    <Template user={user}>
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