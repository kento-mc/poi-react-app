import React from 'react';
import { Header } from 'semantic-ui-react';
import Template from '../components/templateGlobal';
import Panel from '../components/panel';
import FilterBar from '../components/filterBar';
import PoiTabs from '../components/poiTabs';

const PoiListPage = ({ user, pois, listHeader, handleChange }) => {
  
  return (
    <Template user={user}>
      <Panel columnCount='16' >
        <Header as='H2'>{`${listHeader} (${pois.length})`}</Header>
        <FilterBar onUserInput={handleChange} hasContributorFilter='false' />
        <PoiTabs pois={pois} />
      </Panel>
    </Template>
  )
};

export default PoiListPage;