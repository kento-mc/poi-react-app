import React, { useContext } from 'react';
import { Segment } from 'semantic-ui-react';
import { AuthContext } from '../contexts/authContext';
import { PoisContext } from '../contexts/poisContext';
import Template from '../components/templateGlobal';
import Panel from '../components/panel';
import PoiDetail from '../components/poiDetail';
import PoiMap from '../components/poiMap';
import ImageGallery from '../components/imageGallery';

const PoiDetailPage = () => {

  const authContext = useContext(AuthContext);
  const poisContext = useContext(PoisContext);
  
  return (
    <Template user={authContext.loggedInUser}>
      <Panel columnCount='6' >
        <PoiDetail poi={poisContext.pois[0]} />
      </Panel>
      <Panel columnCount='10' >
        <Segment fluid>
          <PoiMap poi={poisContext.pois[0]}/>
          <ImageGallery poi={poisContext.pois[0]} /> 
        </Segment>
      </Panel>
    </Template>
  )
};

export default PoiDetailPage;