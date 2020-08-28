import React from 'react';
import { Header, Image, Card } from 'semantic-ui-react';
import { withRouter } from "react-router-dom";


const ImageGallery = ({ poi, history }) => {

  const handleClick = (image) => {
    const urlString = image.substring(image.lastIndexOf("/") + 1);
    history.push({
      pathname: `/pois/${poi._id}/images/${urlString}`,
      state: { poi: poi, image: image }
    });
  };

  return (
    <>
      <Header>Gallery</Header>
      <Card.Group stackable='true' itemsPerRow='3'>
        {poi.imageURL.map((image, i) => {
          return (
            <Card 
              key={i}
              className='poi-row'
              onClick={() => {
                handleClick(image);
              }}>
              <Image src={image} />
            </Card>
          );
        })}
      </Card.Group>
    </>
  )
}

export default withRouter(ImageGallery);
