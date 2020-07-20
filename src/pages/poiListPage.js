import React from 'react';
import Template from '../components/templateGlobal';
import Panel from '../components/panel';
import PoiDetail from '../components/poiDetail';
import PoiMap from '../components/poiMap';
import ImageGallery from '../components/imageGallery';

const PoiListPage = ({ poi }) => {
  return (
    <Template>
      <Panel columnCount='6' >
        <PoiDetail poi={poi} />
      </Panel>
      <Panel columnCount='10' >
        <PoiMap poi={poi}/>
        <ImageGallery poi={poi} /> 
      </Panel>
    </Template>
  )
};

export default PoiListPage;