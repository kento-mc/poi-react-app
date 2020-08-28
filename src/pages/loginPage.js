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
        <Image src='https://res.cloudinary.com/dwgak0rbs/image/upload/v1598574714/map-pin-shallow_ak6d0e.jpg' />
      </Panel>
    </Template>
  )
};

export default LoginPage;