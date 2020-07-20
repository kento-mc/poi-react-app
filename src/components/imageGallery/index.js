import React from 'react';
import { Header, Image, Segment, Card } from 'semantic-ui-react';

const ImageGallery = ({ poi }) => {

  return (
    <Segment fluid>
      <Header>Gallery</Header>
      <Card.Group stackable='true' itemsPerRow='3'>
        {poi.imageURL.map((image, i) => {
          return (
            <Card key={i}>
              <Image src={image} />
            </Card>
          );
        })}
      </Card.Group>
    </Segment>
  )
}

export default ImageGallery
