import React, { useState } from 'react';
import { Tab } from 'semantic-ui-react';
import PoiList from '../poiList';
import PoiMap from '../poiMap';

const PoiTabs = ({ pois }) => {

  // const [poiFilter, setPoiFilter] = useState("");
  // const [categoryFilter, setCategoryFilter] = useState("0");
  // const catCount = Number(categoryFilter);

  // let displayedPOIs = pois
  //   .filter(poi => {
  //     return poi.name.toLowerCase().search(poiFilter.toLowerCase()) !== -1;
  //   })
  //   .filter(poi => {
  //     return  catCount > 0
  //       ? poi.categories.includes(Number(categoryFilter))
  //       : true;
  //   });

  // const handleChange = (type, value) => {
  //   if (type === "name") setPoiFilter(value);
  //   else setCategoryFilter(value);
  // };

  let poi;
  pois ? poi = pois[0] : poi = {}

  const panes = [
    { menuItem: 'List View', render: () => (
      <Tab.Pane>
        <PoiList pois={pois} />
      </Tab.Pane> 
    )},
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