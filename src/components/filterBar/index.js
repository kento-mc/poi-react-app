import React, { useContext, useEffect, useState } from 'react';
import { Dropdown, Grid, Input } from 'semantic-ui-react';
import { AuthContext } from '../../contexts/authContext';
import { CategoriesContext } from '../../contexts/categoriesContext';

const FilterBar = (props) => {

  const authContext = useContext(AuthContext);
  const categoriesContext = useContext(CategoriesContext);

  const [options, setOptions] = useState('');

  useEffect(() => {

    let adminUser;

    if (authContext.loggedInUser) {
      for (let user of authContext.users) {
        if (user.isAdmin && user.firstName === 'Admin') {
          adminUser = user;
          break;
        }
      }
      
      const availableCats = categoriesContext.categories.filter(cat => {
        return cat.contributor === adminUser._id || cat.contributor === authContext.loggedInUser._id;
      });

      const options = availableCats.map((cat, i) => (
        { key: `cat-${i}`, text: cat.name, value: cat.name }
      ));

      setOptions(options);
    }
  },[])


  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value);
  };

  const handleTextChange = e => {
    handleChange(e, "name", e.target.value);
  };

  const handleCategoryChange = (e, data) => {
    handleChange(e, "category", data.value);
  };

  return (
    <Grid>
      <Grid.Column width='8'>
        <Input fluid
          onChange={handleTextChange}
          icon='filter'
          iconPosition='left'
          placeholder='Filter Name/Description...' 
        />
      </Grid.Column>
      <Grid.Column width='8'>
        <Dropdown button basic floating 
              onChange={handleCategoryChange}
              fluid multiple selection options={options} 
              placeholder='All Categories' />
      </Grid.Column>
    </Grid>  
  )
};

export default FilterBar;