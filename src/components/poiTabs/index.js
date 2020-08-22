import React, { useState } from 'react';
import { Tab } from 'semantic-ui-react';
import PoiList from '../poiList';
import PoiMap from '../poiMap';

const PoiTabs = ({ pois }) => {

  let poi;
  pois ? poi = pois[0] : poi = {}

  const panes = [
    pois.length > 0 ?
    { menuItem: 'List View', render: () => (
      <Tab.Pane>
        <PoiList pois={pois} />
      </Tab.Pane> 
    )} :
    { menuItem: 'List View', render: () => 
      <Tab.Pane loading>
      </Tab.Pane> 
    },
    { menuItem: 'Map View', render: () => (
      <Tab.Pane>
        <PoiMap pois={pois} />
      </Tab.Pane>
    )},
    { menuItem: 'Loadinig', render: () => 
      <Tab.Pane loading>
        Tab 3 Content
      </Tab.Pane> 
    }
  ]

  return (
    <Tab panes={panes} />
  )
};

export default PoiTabs;