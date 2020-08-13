import React, { useContext, useEffect, useState } from 'react';
import useForm from "react-hook-form";
import { Form, Grid, Segment, Input, Button, Header  } from 'semantic-ui-react';
import { Redirect } from "react-router-dom";
import { authenticate, getUsers, getUser, getPois } from '../../api/poi-api';
import { AuthContext } from '../../contexts/authContext';
import { withRouter } from "react-router-dom";


const LoginForm = ({ columns }) => {

  const authContext = useContext(AuthContext);

  const { register, errors, handleSubmit, setValue, triggerValidation } = useForm();
  const [credentials, setCredentials] = useState(null);

  useEffect(() => {
    register({ name: "email" }, { required: true });
    register({ name: "password" }, { required: true });
  }, [register]);

  useEffect(() => {
    if (credentials) {
      getAuth(credentials.email, credentials.password);
    }
  }, [credentials]);

  const getAuth = async (email, password) => {
    const response = await authenticate(email, password);
    console.log(response);
    authContext.updateAuth(email, response.success, response.token);
  };

  const onSubmit = (data, e) => {
    setCredentials({ email: data.email, password: data.password });
  };

  // console.log(errors);

  const authenticateUser = async (email, password) => {
    console.log('hello', email, password);

    let success = false;
    let response;
    try {
      authContext.submitCredentials(email, password);
      // response = await authenticate(email, password);
      // console.log(response);
      // if (response.success) {
      //   authContext.updateAuth(true, response.token);
      //   const users = await getUsers();
      //   console.log(users);
      //   const pois = getPois(authContext.token);
      //   console.log(pois);
      //   window.localStorage.poi = JSON.stringify(response);

      //   await this.getUsers();
      //   const user = this.users.get(email);
      //   this.loggedInUser = user;
      //   await this.getPOIs();
      //   await this.getUserPOIs(this.loggedInUser._id);
      //   await this.getCategories();
      //   await this.getUserCategories();

      //   success = response.success;
      // }
    } catch (e) {
      success = false;
    }
    return response;
  }
  
  return (
    <Grid.Column width={columns}>
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
