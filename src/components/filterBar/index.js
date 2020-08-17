import React, { useContext } from 'react';
import { Dropdown, Input, Header, Table } from 'semantic-ui-react';
import { AuthContext } from '../../contexts/authContext';
import { authenticate } from '../../api/poi-api';
import { useEffect } from 'react';
import { useState } from 'react';

const FilterBar = (props) => {

  const authContext = useContext(AuthContext);
  const listHeader = `${ props.user ? props.user.firstName : 'User' }'s Points of Interest`;
  // const [listHeader, setListHeader] = useState("User's Points of Interest");

  const options = [
    { key: 'name-des', text: 'Name/Des', value: 'name-des' },
    { key: 'categories', text: 'Categories', value: 'categories' },
  ]

  // useEffect(() => {
  //   // setListHeader(`${ authContext.auth ? authContext.loggedInUser.firstName : 'User' }'s Points of Interest`);
  //   console.log(props);
  // }, []);

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value);
  };

  const handleTextChange = e => {
    handleChange(e, "name", e.target.value);
  };

  return (
    <Table basic='very' compact='very'>
      <Table.Row>
        {/* <Table.Cell verticalAlign='middle'>
          <Header as='h2'>{listHeader}</Header>
        </Table.Cell> */}
        <Table.Cell textAlign='right'>
          <Input 
            onChange={handleTextChange}
            label={{ icon: 'filter' }}
            action={
              <Dropdown button basic floating options={options} defaultValue='name-des' />
            }
            placeholder='Filter...' 
            style={{align: 'right'}}
          />
        </Table.Cell>
      </Table.Row>
    </Table>
  )
}

export default FilterBar