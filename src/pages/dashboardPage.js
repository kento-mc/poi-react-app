import React, { useEffect, useState, useContext } from 'react';
import { Header, Loader } from 'semantic-ui-react';
import { AuthContext } from '../contexts/authContext2';
import { PoiContext } from '../contexts/poiContext';
import { FilterContext } from '../contexts/filterContext';
import Template from '../components/templateGlobal';
import AddPoiForm from '../components/addPoiForm';
import FilterBar from '../components/filterBar';
import PoiTabs from '../components/poiTabs';
import Panel from '../components/panel';
import AddCategories from '../components/addCategories';

const DashboardPage = (props) => {

  const [isLoaded, setIsLoaded] = useState(false);

  const authContext = useContext(AuthContext);
  const poiContext = useContext(PoiContext);
  const { displayedPOIs, handleChange } = useContext(FilterContext);
  
  let listHeader = `${ authContext.loggedInUser ? authContext.loggedInUser.firstName + '\'s Points of Interest' : '' }`;

  // Create default category list. This should be moved to poiContext
  let adminIDs = [];
  const adminUsers = authContext.users.filter(user => user.isAdmin);
  adminUsers.forEach(user => adminIDs.push(user._id));
  const adminCats = poiContext.categories.filter(cat => {
    return adminIDs.includes(cat.contributor);
  });

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('poi-state')).pois.length === 0 ) {
      poiContext.setPoiData(authContext.loggedInUser);
    }
  },[]);

  useEffect (() => {
    console.log('Dashboard useEffect');
    console.log(poiContext.pois);
    // if (poiContext.pois.length !== 0) {
    if (JSON.parse(localStorage.getItem('auth-state'))) {
      if (JSON.parse(localStorage.getItem('poi-state')).pois.length !== 0) {
        console.log(JSON.parse(localStorage.getItem('poi-state')).pois);
        setIsLoaded(true);
      }
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
      <Panel columnCount='10' >
        <Header as='h2'>{`${listHeader} (${displayedPOIs(poiContext.userPOIs).length})`}</Header>
        <FilterBar categories={poiContext.categories} onUserInput={handleChange} />
        <PoiTabs pois={displayedPOIs(poiContext.userPOIs)} />
      </Panel>
      <Panel columnCount='6' >
        <AddPoiForm 
          user={authContext.loggedInUser} 
          categories={[...adminCats, ...poiContext.userCustomCats]} 
          updatePOIs={poiContext.updatePoiData}
          poiCount={displayedPOIs(poiContext.userPOIs).length} />
        <AddCategories 
          user={authContext.loggedInUser} 
          userCategories={poiContext.userCustomCats}
          setUserCategories={poiContext.setUserCategories}
          catCount={poiContext.userCustomCats.length} />
      </Panel>
    </Template>
  )
};

export default DashboardPage;