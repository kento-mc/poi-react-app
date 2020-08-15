import React, { useContext} from 'react';
import { AuthContext } from '../contexts/authContext';
import { PoisContext } from '../contexts/poisContext';
import Template from '../components/templateGlobal';
import Panel from '../components/panel';
import PoiTabs from '../components/poiTabs';

const PoiListPage = () => {
  
  const authContext = useContext(AuthContext);
  const poisContext = useContext(PoisContext);

  return (
    <Template user={authContext.loggedInUser}>
      <Panel columnCount='16' >
        <PoiTabs pois={poisContext.pois} />
      </Panel>
    </Template>
  )
};

export default PoiListPage;