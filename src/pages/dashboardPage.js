import React, { useContext, useEffect, useState } from 'react';
import { Header } from 'semantic-ui-react';
import { AuthContext } from '../contexts/authContext';
import { PoisContext } from '../contexts/poisContext';
import Template from '../components/templateGlobal';
import AddPoiForm from '../components/addPoiForm';
import FilterBar from '../components/filterBar';
import PoiTabs from '../components/poiTabs';
import Panel from '../components/panel';
import AddCategories from '../components/addCategories';

const DashboardPage = () => {
  
  const authContext = useContext(AuthContext);
  const poisContext = useContext(PoisContext);
  
  const [poiFilter, setPoiFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("0");
  
  const catCount = Number(categoryFilter);
  const listHeader = `${ authContext.loggedInUser ? authContext.loggedInUser.firstName + '\'s Points of Interest' : '' }`;

  useEffect(() => {
    poisContext.getAllPOIs(authContext.loggedInUser);
  }, [authContext.loggedInUser]);

  let displayedPOIs = poisContext.userPOIs
    .filter(poi => {
      return poi.name.toLowerCase().search(poiFilter.toLowerCase()) !== -1;
    })
    .filter(poi => {
      return  catCount > 0
        ? poi.categories.includes(Number(categoryFilter))
        : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setPoiFilter(value);
    else setCategoryFilter(value);
  };

  return (
    <Template user={authContext.loggedInUser}>
      <Panel columnCount='10' >
        <Header as='H2'>{`${listHeader} (${displayedPOIs.length})`}</Header>
        <FilterBar onUserInput={handleChange} />
        <PoiTabs pois={displayedPOIs} />
      </Panel>
      <Panel columnCount='6' >
        <AddPoiForm />
        <AddCategories />
      </Panel>
    </Template>
  )
};

export default DashboardPage;