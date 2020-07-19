import React from 'react';
import Template from '../components/templateGlobal';
import AddPoiForm from '../components/addPoiForm';
import PoiList from '../components/poiList';
import Panel from '../components/panel';
import AddCategories from '../components/addCategories';

const DashboardPage = ({ pois }) => {
  return (
    <Template>
      <Panel columnCount='10' >
        <PoiList pois={pois} />
      </Panel>
      <Panel columnCount='6' >
        <AddPoiForm />
        <AddCategories />
      </Panel>
    </Template>
  )
};

export default DashboardPage;