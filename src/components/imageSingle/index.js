import React from 'react';
import { Header, Image, Card } from 'semantic-ui-react';
import { withRouter } from "react-router-dom";

const ImageSingle = ({ poi, image, history }) => {

  const handleClick = (image) => {
    history.push({
      pathname: `/pois/${poi._id}/images/${image}`,
      state: { image: image }
    });
  };

  return (
    <>
      <Header>{`${poi.name} Gallery`}</Header>
      <Image src={image} fluid/>
    </>
  )
}

export default withRouter(ImageSingle);
