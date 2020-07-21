import React from 'react';
import { Header, Image, Card } from 'semantic-ui-react';

const ImageGallery = ({ poi }) => {

  return (
    <>
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
    </>
  )
}

export default ImageGallery
