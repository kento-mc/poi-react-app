import React from 'react';
import { Form, Segment, Input, Image, Label, TextArea, Button, Select, Header, Table, Tab  } from 'semantic-ui-react';


const PoiDetail = ({ poi }) => {
  return (
    <Segment fluid>
      <Form>
        <Header>{poi.name}</Header>
        <Image src={poi.thumbnailURL} fluid/>
        <br />
        <Form.Field
          id='form-input-control-name'
          control={Input}
          label='Name'
          placeholder={poi.name}
        />
        <Form.Field
          id='form-textarea-control-description'
          control={TextArea}
          label='Description'
          placeholder={poi.description}
        />
        <Form.Group widths='equal'>
          <Form.Field
            id='form-input-control-lat'
            control={Input}
            label='Latitude'
            placeholder={poi.location.lat}
            step='0.000001'
          />
          <Form.Field
            id='form-input-control-lon'
            control={Input}
            label='Longitude'
            content={poi.location.lon}
            placeholder={poi.location.lon}
            step='0.000001'
          />
        </Form.Group>
        <Form.Field
          label='Categories'
        ></Form.Field>
        <Table>
          <Table.Body>
            {poi.categories.map(cat => {
              return (
                <Table.Row>
                  <Table.Cell>
                    {cat}
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
        <Form.Field
          id='form-textarea-control-contributor'
          control={Input}
          label='Contributor'
          placeholder={poi.contributor.fullName}
        />
        <Form.Field
          id='form-button-control-public'
          control={Button}
          content='Edit'
          color='blue'
        />
      </Form>
    </Segment>
  )
}

export default PoiDetail;