import React from 'react';
import { Tab } from 'semantic-ui-react';
import PoiList from '../poiList';
import PoiMap from '../poiMap';

const PoiTabs = ({ pois, isDashboard }) => {

  const panes = [
    pois.length > 0 ?
    { menuItem: 'List View', render: () => (
      <Tab.Pane>
        <PoiList pois={pois} isDashboard={isDashboard} />
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
    )}
  ]

  return (
    <Tab panes={panes} />
  )
};

export default PoiTabs;