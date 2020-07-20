import React from 'react';
import { Image } from 'semantic-ui-react';

const PoiMap = ({ poi }) => {

  return (
    <>
      <Image src={poi?.thumbnailURL} fluid/>
    </>
  )
}

export default PoiMap
