import React from 'react';
import { Image } from 'semantic-ui-react';
import Template from '../components/templateGlobal';
import Panel from '../components/panel';
import LoginForm from '../components/loginForm';

const LoginPage = (props) => {

  return (
    <Template>
      <Panel columnCount='8' >
        <LoginForm></LoginForm>
      </Panel>
      <Panel columnCount='8' >
        <Image src='../../public/film-poster-placeholder.png' />
      </Panel>
    </Template>
  )
};

export default LoginPage;