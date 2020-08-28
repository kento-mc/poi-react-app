import React, { useEffect, useContext, useState } from 'react';
import { Header, Loader } from 'semantic-ui-react';
import { AuthContext } from '../contexts/authContext2';
import { PoiContext } from '../contexts/poiContext';
import { FilterContext } from '../contexts/filterContext';
import Template from '../components/templateGlobal';
import Panel from '../components/panel';
import FilterBar from '../components/filterBar';
import PoiTabs from '../components/poiTabs';

const PoiListPage = (props) => {
  
  const [isLoaded, setIsLoaded] = useState(false);

  const authContext = useContext(AuthContext);
  const poiContext = useContext(PoiContext);
  const { displayedPOIs, handleChange } = useContext(FilterContext);


  useEffect (() => {
    if (poiContext.pois.length !== 0) {
      setIsLoaded(true);
    }
  },[poiContext.pois]);

  if (!isLoaded) {
    console.log('Dashboard loading...');
    return (
      <Template user ={authContext.loggedInUser}>
        <Panel columnCout ='16'>
          <Loader active inline='centered' size='large'/>
        </Panel>
      </Template>
    )
  }
  return (
    <Template user={authContext.loggedInUser}>
      <Panel columnCount='16' >
        <Header as='h2'>{`All of the wondrous points of interest! (${displayedPOIs(poiContext.pois).length})`}</Header>
        <FilterBar categories={poiContext.categories} onUserInput={handleChange} hasContributorFilter={true} />
        <PoiTabs pois={displayedPOIs(poiContext.pois)} />
      </Panel>
    </Template>
  )
};

export default PoiListPage;