import React, { useContext, useEffect } from 'react';
import useForm from "react-hook-form";
import { Form, Grid, Segment, Button, Header  } from 'semantic-ui-react';
import { Redirect, withRouter } from "react-router-dom";
import { AuthContext } from '../../contexts/authContext2';

const LoginForm = (props) => {

  const authContext = useContext(AuthContext);

  const { register, errors, handleSubmit, setValue, triggerValidation } = useForm();

  useEffect(() => {
    register({ name: "email" }, { required: true });
    register({ name: "password" }, { required: true });
  }, [register]);

  const onSubmit = (data, e) => {
    authContext.authenticateUser(data.email, data.password);
  };
  
  // Set 'from' to path where browser is redirected after a successful login.
  // Either / or the protected path user tried to access.
  const { from } = props.location.state || { from: { pathname: "/" } };

  if (authContext.loggedInUser) {
    console.log('Leaving login page');
    console.log(authContext.loggedInUser);
    return <Redirect to={from} />;
  }

  return (
    <Grid.Column width={props.columns}>
      <Segment>
        
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
