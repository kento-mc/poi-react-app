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
          <Form.Field
            id='form-textarea-control-description'
            control={TextArea}
            label='Description'
            placeholder='description'
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
            label={{ children: 'Category', htmlFor: 'form-select-control-category' }}
            placeholder='Category'
            search
            searchInput={{ id: 'form-select-control-category' }}
          />
          <label for="file-upload" class="ui blue button">
            <i class="image icon"></i>
            Upload Image
          </label>
          <input id="file-upload" type="file" name="image" style={{display: "none"}}></input>
          <Form.Field
            id='form-button-control-public'
            control={Button}
            content='Submit'
            label='Label with htmlFor'
            color='blue'
          />
        </Form>
      </Segment>
    </Grid.Column>
  )
}

export default AddPoiForm;