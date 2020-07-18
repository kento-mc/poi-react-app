import React from 'react';
import Template from '../components/templateGlobal';
import AddPoiForm from '../components/addPoiForm';
import PoiList from '../components/poiList';

const Dashboard = ({ pois }) => {
  return (
    <Template>
      <PoiList columnCount='10' pois={pois} />
      <AddPoiForm columnCount='6' />
    </Template>
  )
};

export default Dashboard;