import React from 'react';
import { Segment } from 'semantic-ui-react';
import Template from '../components/templateGlobal';
import Panel from '../components/panel';
import PoiDetail from '../components/poiDetail';
import PoiMap from '../components/poiMap';
import ImageGallery from '../components/imageGallery';

const PoiDetailPage = ({ poi }) => {
  return (
    <Template>
      <Panel columnCount='6' >
        <PoiDetail poi={poi} />
      </Panel>
      <Panel columnCount='10' >
        <Segment fluid>
          <PoiMap poi={poi}/>
          <ImageGallery poi={poi} /> 
        </Segment>
      </Panel>
    </Template>
  )
};

export default PoiDetailPage;