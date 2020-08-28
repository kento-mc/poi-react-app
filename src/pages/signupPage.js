import React from 'react';
import { Image } from 'semantic-ui-react';
import Template from '../components/templateGlobal';
import Panel from '../components/panel';
import SignupForm from '../components/signupForm';

const SignupPage = () => {

  return (
    <Template>
      <Panel columnCount='8' >
        <Image src='https://res.cloudinary.com/dwgak0rbs/image/upload/v1598574713/globe_wxzv9o.jpg' />
      </Panel>
      <Panel columnCount='8' >
        <SignupForm />
      </Panel>
    </Template>
  )
};

export default SignupPage;