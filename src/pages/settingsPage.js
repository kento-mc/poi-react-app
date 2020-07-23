import React from 'react';
import { Image } from 'semantic-ui-react';
import Template from '../components/templateGlobal';
import Panel from '../components/panel';
import SettingsForm from '../components/settingsForm';

const SettingsPage = ({ user, pois }) => {

  return (
    <Template user={user}>
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