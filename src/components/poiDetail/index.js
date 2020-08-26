import React from 'react';
import { Card, Form, Segment, Input, Image, TextArea, Button, Header } from 'semantic-ui-react';


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
            placeholder={poi.location.lon}
            step='0.000001'
          />
        </Form.Group>
        <Form.Field
          label='Categories'
        />
        <Card.Group stackable='true' itemsPerRow='3'>
          {poi.categories.map((cat, i) => {
            return (
              <Card key={i}>
                <Button disabled basic size='mini'>{cat.name}</Button>
              </Card>
            );
          })}
        </Card.Group>
        <br />
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