import React from 'react';
import { Tab } from 'semantic-ui-react';
import Template from '../components/templateGlobal';
import Panel from '../components/panel';
import PoiList from '../components/poiList';
import POI from '../components/poiListSingle';
import PoiMap from '../components/poiMap';

const PoiListPage = ({ pois }) => {

  const panes = [
    { menuItem: 'All POIs', render: () => (
      <Tab.Pane>
        <PoiList pois={pois} />
      </Tab.Pane> 
    )},
    { menuItem: 'Map View', render: () => (
      <Tab.Pane>
        <PoiMap poi={pois[0]} />
      </Tab.Pane>
    )},
    { menuItem: 'Loadinig', render: () => <Tab.Pane loading>Tab 3 Content</Tab.Pane> },
  ]

  return (
    <Template>
      <Panel columnCount='16' >
        <Tab panes={panes} />
      </Panel>
    </Template>
  )
};

export default PoiListPage;