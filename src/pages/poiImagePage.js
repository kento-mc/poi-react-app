import React, { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';
import Template from '../components/templateGlobal';
import Panel from '../components/panel';
import ImageSingle from '../components/imageSingle';
import ImageGallery from '../components/imageGallery';

const PoiDetailPage = ({ location }) => {

  const authContext = useContext(AuthContext);
  
  return (
    <Template user={authContext.loggedInUser}>
      <Panel columnCount='16' >
      <ImageSingle poi={location.state.poi} image={location.state.image} />
      <ImageGallery poi={location.state.poi}/>
      </Panel>
    </Template>
  )
};

export default PoiDetailPage;