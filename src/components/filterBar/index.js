import React from 'react'
import { Dropdown, Input, Header, Table } from 'semantic-ui-react'

const FilterBar = () => {

  const user = 'Homer';
  const listHeader = `${user}'s Points of Interest`;

  const options = [
    { key: 'name-des', text: 'Name/Des', value: 'name-des' },
    { key: 'categories', text: 'Categories', value: 'categories' },
  ]

  return (
    <Table basic='very' compact='very'>
      <Table.Row>
        <Table.Cell>
          <Header as='h2'>{listHeader}</Header>
        </Table.Cell>
        <Table.Cell textAlign='right'>
          <Input 
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