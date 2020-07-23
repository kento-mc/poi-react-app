import React from 'react';
import { Card, Form, Segment, Button, Input, Header, Table  } from 'semantic-ui-react';

const catHeader = `Custom Categories`;

const categoryOptions = [
  { key: '0', text: 'D\'oh!', value: 'd\'oh' },
  { key: '1', text: 'Mmmmm Duff', value: 'mmmmm duff' },
  { key: '2', text: 'Go Topes!', value: 'go topes!' },
]

const AddCategories = ({ columnCount }) => {

  const catList = categoryOptions?.map((cat, i) => (
    <Card key={i}>
      <Button disabled basic size='mini'>{cat.text}</Button>
    </Card>
  ));

  return (
    <Segment fluid>
      <Table basic='very' compact='very'>
        <Table.Row>
          <Table.Cell verticalAlign='middle'>
            <Header as='h4' floated='left'>{catHeader}</Header>
          </Table.Cell>
          <Table.Cell>
            <Form>
              <Form.Field
                id='form-input-control-name'
                control={Input}
                placeholder='Add new category'
                action={
                  <Button id='form-button-control-public' content='+' color='blue' />
                }
              />
            </Form> 
          </Table.Cell>
        </Table.Row>  
      </Table>
      <Card.Group stackable='true' itemsPerRow='3'>
        {catList}
      </Card.Group>
    </Segment>
  )
}

export default AddCategories;