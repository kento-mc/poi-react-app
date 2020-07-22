import React from 'react';
import Template from '../components/templateGlobal';
import Panel from '../components/panel';
import PoiTabs from '../components/poiTabs';

const PoiListPage = ({ user, pois }) => {

  return (
    <Template user={user}>
      <Panel columnCount='16' >
        <PoiTabs pois={pois} />
      </Panel>
    </Template>
  )
};

export default PoiListPage;