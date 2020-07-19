import React from 'react';
import { Form, Segment, Button, Input, Header, Table  } from 'semantic-ui-react';

const catHeader = `Custom Categories`;

const categoryOptions = [
  { key: '0', text: 'D\'oh!', value: 'd\'oh' },
  { key: '1', text: 'Mmmmm Duff', value: 'mmmmm duff' },
  { key: '2', text: 'Go Topes!', value: 'go topes!' },
]

const AddCategories = ({ columnCount }) => {

  const catList = categoryOptions?.map(cat => (
    <Table.Row>
      <Table.Cell key={cat.key}>
        {cat.text}
      </Table.Cell>
    </Table.Row>
  ));

  return (
    <Segment fluid>
      <Table basic='very' compact='very'>
        <Table.Row>
          <Table.Cell>
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
      <Table>
        <Table.Body>
          {catList}
        </Table.Body>
      </Table>
    </Segment>
  )
}

export default AddCategories;