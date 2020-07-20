import React from 'react';
import Template from '../components/templateGlobal';
import Panel from '../components/panel';
import PoiDetail from '../components/poiDetail';

const PoiDetailPage = ({ poi }) => {
  return (
    <Template>
      <Panel columnCount='6' >
        <PoiDetail poi={poi} />
      </Panel>
      <Panel columnCount='10' >
        {
          //poiMap}
          //imageGallery}
        }   
      </Panel>
    </Template>
  )
};

export default PoiDetailPage;