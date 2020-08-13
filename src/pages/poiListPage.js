import React, { useContext} from 'react';
import { PoisContext } from '../contexts/poisContext';
import Template from '../components/templateGlobal';
import Panel from '../components/panel';
import PoiTabs from '../components/poiTabs';

const PoiListPage = ({ user, pois }) => {
  
  const context = useContext(PoisContext);

  return (
    <Template user={user}>
      <Panel columnCount='16' >
        <PoiTabs pois={context.pois} />
      </Panel>
    </Template>
  )
};

export default PoiListPage;