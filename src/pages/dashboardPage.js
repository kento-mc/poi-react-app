import React from 'react';
import Template from '../components/templateGlobal';
import AddPoiForm from '../components/addPoiForm';
import PoiList from '../components/poiList';

const Dashboard = ({ pois }) => {
  return (
    <Template>
      <AddPoiForm columns='6' />
      <PoiList columns='10' pois={pois} />
    </Template>
  )
};

export default Dashboard;