import React from 'react';
import { Image, Segment } from 'semantic-ui-react';

const PoiMap = ({ poi }) => {

  return (
    <Segment fluid>
      <Image src={poi?.thumbnailURL} fluid/>
    </Segment>
  )
}

export default PoiMap
