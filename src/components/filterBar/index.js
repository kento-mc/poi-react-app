import React, { useContext, useEffect, useState } from 'react';
import { Dropdown, Grid, Input } from 'semantic-ui-react';
import { AuthContext } from '../../contexts/authContext';
import { CategoriesContext } from '../../contexts/categoriesContext';

const FilterBar = ({ onUserInput, hasContributorFilter }) => {

  const authContext = useContext(AuthContext);
  const categoriesContext = useContext(CategoriesContext);

  const [catOptions, setCatOptions] = useState('');
  const [contOptions, setContOptions] = useState('');


  let textWidth;
  let dropDownWidth;

  if (hasContributorFilter) {
    textWidth = 8;
    dropDownWidth =4;
  } else {
    textWidth = 8;
    dropDownWidth =8;
  }

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

      const catOptions = availableCats.map((cat, i) => (
        { key: cat._id, text: cat.name, value: cat.name }
      ));

      const contOptions = authContext.users.map((user, i) => (
        { key: user._id, text: user.fullName, value: user.fullName }
      ));

      contOptions.unshift(
        { key: 'all-users', text: 'All Users', value: '' }
      );

      setCatOptions(catOptions);
      setContOptions(contOptions);
    }
  },[])


  const handleChange = (e, type, value) => {
    e.preventDefault();
    onUserInput(type, value);
  };

  const handleTextChange = e => {
    handleChange(e, "name", e.target.value);
  };

  const handleCategoryChange = (e, data) => {
    handleChange(e, "category", data.value);
  };

  const handleContributorChange = (e, data) => {
    handleChange(e, "contributor", data.value);
  };

  return (
    <Grid>
      <Grid.Column width={textWidth}>
        <Input fluid
          onChange={handleTextChange}
          icon='filter'
          iconPosition='left'
          placeholder='Filter Name/Description...' 
        />
      </Grid.Column>
      <Grid.Column width={dropDownWidth}>
        <Dropdown button basic floating 
              onChange={handleCategoryChange}
              fluid multiple selection options={catOptions} 
              placeholder='All Categories' />
      </Grid.Column>
      {hasContributorFilter ? 
        <Grid.Column width={dropDownWidth}>
          <Dropdown button basic floating 
              onChange={handleContributorChange}
              fluid selection options={contOptions} 
              placeholder='All Users' />
        </Grid.Column> :
        <span />
      }
    </Grid>  
  )
};

export default FilterBar;