import React, { useContext } from 'react';
import { Segment } from 'semantic-ui-react';
import { AuthContext } from '../contexts/authContext';
import Template from '../components/templateGlobal';
import Panel from '../components/panel';
import PoiDetail from '../components/poiDetail';
import PoiMap from '../components/poiMap';
import ImageGallery from '../components/imageGallery';

const PoiDetailPage = (props) => {

  const authContext = useContext(AuthContext);
  
  return (
    <Template user={authContext.loggedInUser}>
      <Panel columnCount='6' >
        <PoiDetail poi={props.location.state.poi} />
      </Panel>
      <Panel columnCount='10' >
        <Segment fluid>
          <div id='leaflet-container'>
            <PoiMap poi={props.location.state.poi}/>
          </div>
          <ImageGallery poi={props.location.state.poi} /> 
        </Segment>
      </Panel>
    </Template>
  )
};

export default PoiDetailPage;