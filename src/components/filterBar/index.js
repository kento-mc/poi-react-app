import React from 'react';
import { Dropdown, Input } from 'semantic-ui-react';

const FilterBar = (props) => {

  const options = [
    { key: 'cat-1', text: 'Category 1', value: '1' },
    { key: 'cat-2', text: 'Category 2', value: '2' },
  ]

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value);
  };

  const handleTextChange = e => {
    handleChange(e, "name", e.target.value);
  };

  const handleCategoryChange = e => {
    handleChange(e, "category", e.target.textContent);
  };

  return (
    <>
      <Input fluid
        onChange={handleTextChange}
        // action={
          
        // }
        icon='filter'
        iconPosition='left'
        placeholder='Filter...' 
        // style={{align: 'right'}}
      />
      <Dropdown button basic floating 
            onChange={handleCategoryChange}
            fluid multiple selection options={options} 
            placeholder='All Cagegories' />
      <br />
    </>
  )
};

export default FilterBar;