import React, { useEffect, useState, useContext } from 'react';
import useForm from "react-hook-form";
import { Form, Grid, Segment, Button, Header  } from 'semantic-ui-react';
import { addUser } from '../../api/poi-api';
import { Redirect, withRouter } from "react-router-dom";
import { AuthContext } from '../../contexts/authContext';

const SignupForm = ({ location }) => {

  const authContext = useContext(AuthContext);

  const [credentials, setCredentials] = useState([]);

  const { register, errors, handleSubmit, setValue, triggerValidation } = useForm();

  useEffect(() => {
    register({ name: "firstName" }, { required: true });
    register({ name: "lastName" }, { required: true });
    register({ name: "email" }, { required: true });
    register({ name: "password" }, { required: true });
  }, [register]);

  useEffect(() => {
    const sendCredentials = async (creds) => {
      const newUser = await addUser(creds);
      console.log('User:', newUser);
      authContext.authenticateUser(newUser.email, credentials.password);

    };
    if (credentials) {
      sendCredentials(credentials);
    }
  }, [credentials]);

  const onSubmit = (data, e) => {
    setCredentials({
      'firstName': data.firstName, 
      'lastName': data.lastName, 
      'email': data.email,
      'password': data.password
    });
  };

    // Set 'from' to path where browser is redirected after a successful login.
  // Either / or the protected path user tried to access.
  const { from } = location.state || { from: { pathname: "/" } };

  if (authContext.loggedInUser) {
    console.log('Leaving login page');
    console.log(authContext.loggedInUser);
    return <Redirect to={from} />;
  }

  return (
    <Grid.Column>
      <Segment fluid>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Header>Sign Up</Header>
          <Form.Group widths='equal'>
            <Form.Input
              name='firstName'
              fluid
              label='First Name'
              placeholder='Homer'
              onChange={async (e, { name, value }) => {
                setValue(name, value);
                await triggerValidation({ name });
              }}
              error={errors.firstName ? true : false}
            />
            <Form.Input
              name='lastName'
              fluid
              label='Last Name'
              placeholder='Simpson'
              onChange={async (e, { name, value }) => {
                setValue(name, value);
                await triggerValidation({ name });
              }}
              error={errors.firstName ? true : false}
            />
          </Form.Group>
          <Form.Input
            name='email'
            fluid
            label='Email'
            placeholder='homer@simpson.com'
            onChange={async (e, { name, value }) => {
              setValue(name, value);
              await triggerValidation({ name });
            }}
            error={errors.firstName ? true : false}
          />
          <Form.Input
            name='password'
            type='password'
            fluid
            label='Password'
            placeholder='*********'
            onChange={async (e, { name, value }) => {
              setValue(name, value);
              await triggerValidation({ name });
            }}
            error={errors.lastName ? true : false}
          />
          <Button type='submit' color='blue'>Submit</Button>
        </Form>
      </Segment>
    </Grid.Column>
  )
}

export default withRouter(SignupForm);