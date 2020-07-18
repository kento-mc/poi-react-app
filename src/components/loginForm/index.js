import React from 'react';
import { Form, Grid, Segment, Input, TextArea, Button, Select, Header  } from 'semantic-ui-react';

const categoryOptions = [
  { key: '0', text: 'Park', value: 'park' },
  { key: '1', text: 'Dining', value: 'dining' },
  { key: '2', text: 'Trail', value: 'trail' },
]

const AddPoiForm = ({ columns }) => {
  return (
    <Grid.Column width={columns}>
      <Segment fluid>
        <Form>
          <Header>Add a new Point of Interest</Header>
          <Form.Field
            id='form-input-control-name'
            control={Input}
            label='Name'
            placeholder='Name'
          />
          <Form.Group widths='equal'>
            <Form.Field
              id='form-input-control-lat'
              control={Input}
              label='Latitude'
              placeholder='0.000000'
              step='0.000001'
            />
            <Form.Field
              id='form-input-control-lon'
              control={Input}
              label='Longitude'
              placeholder='0.000000'
              step='0.000001'
            />
          </Form.Group>
          <Form.Field
            control={Select}
            options={categoryOptions}
            label={{ children: 'Gender', htmlFor: 'form-select-control-category' }}
            placeholder='Category'
            search
            searchInput={{ id: 'form-select-control-category' }}
          />
          <Form.Field
            id='form-textarea-control-opinion'
            control={TextArea}
            label='Opinion'
            placeholder='Opinion'
          />
          <Form.Field
            id='form-input-control-error-email'
            control={Input}
            label='Email'
            placeholder='joe@schmoe.com'
            error={{
              content: 'Please enter a valid email address',
              pointing: 'below',
            }}
          />
          <Form.Field
            id='form-button-control-public'
            control={Button}
            content='Confirm'
            label='Label with htmlFor'
          />
        </Form>
      </Segment>
    </Grid.Column>
  )
}

export default AddPoiForm;