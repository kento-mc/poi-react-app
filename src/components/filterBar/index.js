import React from 'react'
import { Dropdown, Input, Header, Grid } from 'semantic-ui-react'

const FilterBar = () => {

  const user = 'Homer';
  const listHeader = `${user}'s Points of Interest`;

  const options = [
    { key: 'name-desc', text: 'Name/Desc', value: 'name-desc' },
    { key: 'category', text: 'Category', value: 'category' },
  ]

  return (
    <Grid>
      <Grid.Column width='7'>
        <Header as='h2'>{listHeader}</Header>
      </Grid.Column>
      <Grid.Column width='9'>
        <Input 
          label={{ icon: 'filter' }}
          action={
            <Dropdown button basic floating options={options} defaultValue='name-desc' />
          }
          placeholder='Filter...' 
          style={{align: 'right'}}
        />
      </Grid.Column>
    </Grid>
  )
}

export default FilterBar