import React from 'react';
import { Image } from 'semantic-ui-react';
import Template from '../components/templateGlobal';
import Panel from '../components/panel';
import SignupForm from '../components/signupForm';

const SignupPage = () => {

  return (
    <Template>
      <Panel columnCount='8' >
        <Image src='../../public/film-poster-placeholder.png' />
      </Panel>
      <Panel columnCount='8' >
        <SignupForm />
      </Panel>
    </Template>
  )
};

export default SignupPage;