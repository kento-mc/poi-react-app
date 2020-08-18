import React, { useContext, useEffect, useState } from 'react';
import useForm from "react-hook-form";
import { Form, Grid, Segment, Button, Header  } from 'semantic-ui-react';
import { Redirect } from "react-router-dom";
import { authenticate } from '../../api/poi-api';
import { AuthContext } from '../../contexts/authContext';
import { withRouter } from "react-router-dom";

const LoginForm = (props) => {

  const authContext = useContext(AuthContext);

  const { register, errors, handleSubmit, setValue, triggerValidation } = useForm();
  const [credentials, setCredentials] = useState(null);
  const [toDashboard, setToDashboard] = useState(false);

  useEffect(() => {
    register({ name: "email" }, { required: true });
    register({ name: "password" }, { required: true });
  }, [register]);

  useEffect(() => {
    if (credentials) {
      getAuth(credentials.email, credentials.password);
      console.log('Login Form useEffect');
    }
  }, [credentials]);

  // useEffect(() => {
  //   if (authContext.loggedInUser) {
  //     console.log('hi');
  //     return <Redirect to={{ pathname: "/" }} />;
  //   }
  // },[]);


  const getAuth = async (email, password) => {
    try {
      const response = await authenticate(email, password);
      localStorage.setItem('authenticated', response.success);
      localStorage.setItem('token', response.token);
      localStorage.setItem('email', email);
      authContext.updateAuth(email, response.success);
      // const users = await getUsers();
      // authContext.updateAuth(response.success);
      // authContext.usersByEmailSetup(users);
      // authContext.usersByIdSetup(users);
      setToDashboard(true);
    } catch (e) {
      console.log(e);
    }
  };

  const onSubmit = (data, e) => {
    setCredentials({ email: data.email, password: data.password });
  };

  // console.log(errors);
  
  // const { from } = props.location.state || { from: { pathname: "/" } };

  if (toDashboard) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <Grid.Column width={props.columns}>
      <Segment fluid>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Header>Login</Header>
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
  );
};

export default withRouter(LoginForm);
