import React, { useContext } from 'react';
import { Image } from 'semantic-ui-react';
import { AuthContext } from '../contexts/authContext2';
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
        <Image src='https://res.cloudinary.com/dwgak0rbs/image/upload/v1598574714/ISS_uerhgy.jpg' />
      </Panel>
    </Template>
  )
};

export default SettingsPage;