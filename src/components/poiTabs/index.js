import React from 'react';
import { Tab } from 'semantic-ui-react';
import PoiList from '../poiList';
import PoiMap from '../poiMap';

const PoiTabs = ({ pois }) => {

  let poi;
  pois ? poi = pois[0] : poi = {}
  const panes = [
    { menuItem: 'All POIs', render: () => (
      <Tab.Pane>
        <PoiList pois={pois} />
      </Tab.Pane> 
    )},
    { menuItem: 'Map View', render: () => (
      <Tab.Pane>
        <PoiMap poi={poi} />
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