import React, { useContext } from 'react';
import { Segment } from 'semantic-ui-react';
import { AuthContext } from '../contexts/authContext2';
import { PoiContext } from '../contexts/poiContext';
import Template from '../components/templateGlobal';
import Panel from '../components/panel';
import PoiDetail from '../components/poiDetail';
import PoiMap from '../components/poiMap';
import ImageGallery from '../components/imageGallery';

const PoiDetailPage = () => {

  const authContext = useContext(AuthContext);
  const poiContext = useContext(PoiContext);
  
  return (
    <Template user={authContext.loggedInUser}>
      <Panel columnCount='6' >
        <PoiDetail poi={poiContext.pois[0]} />
      </Panel>
      <Panel columnCount='10' >
        <Segment fluid>
          <PoiMap poi={poiContext.pois[0]}/>
          <ImageGallery poi={poiContext.pois[0]} /> 
        </Segment>
      </Panel>
    </Template>
  )
};

export default PoiDetailPage;