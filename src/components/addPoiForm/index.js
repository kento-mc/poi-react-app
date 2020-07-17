import React from 'react';
import { Form, Grid, Segment } from 'semantic-ui-react';

const AddPoiForm = ({ columns }) => {
  return (
    <Grid.Column width={columns}>
      <Segment fluid>
        <Form>
          <ul>
            <li>sup</li>
            <li>bro</li>
          </ul>
        </Form>
      </Segment>
    </Grid.Column>
  )
}

export default AddPoiForm;