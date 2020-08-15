import React, { useContext } from 'react';
import { Image } from 'semantic-ui-react';
import { AuthContext } from '../contexts/authContext';
import Template from '../components/templateGlobal';
import Panel from '../components/panel';
import SettingsForm from '../components/settingsForm';

const SettingsPage = () => {

  const authContext = useContext(AuthContext);

  return (
    <Template user={authContext.loggedInUser}>
      <Panel columnCount='8' >
        <SettingsForm />
      </Panel>
      <Panel columnCount='8' >
        <Image src='../../public/film-poster-placeholder.png' />
      </Panel>
    </Template>
  )
};

export default SettingsPage;