import React, { useContext } from 'react';
import useForm from "react-hook-form";
import { Form, Grid, Segment, Input, Button, Header  } from 'semantic-ui-react';
import { Redirect } from "react-router-dom";
import { authenticate, getPois } from '../../api/poi-api';
import { AuthContext } from '../../contexts/authContext';

const LoginForm = ({ columns }) => {

  const authContext = useContext(AuthContext);
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = async (data) => {
    const response = await authenticateUser(data.email, data.password);
    if (response.success) {
      authContext.updateAuth(true);
      authContext.addToken(response.token);
    }
    // return success ? <Redirect to='/dashboard' /> : <Redirect to='/' />;
  };

  const authenticateUser = async (email, password) => {
    let success = false;
    let response;
    try {
      response = await authenticate(email, password);
      console.log(response);
      if (response.success) {
        // authContext.updateAuth(true);
        // authContext.addToken(response.token);
        // const pois = getPois(authContext.token);
        // console.log(pois);
        // window.localStorage.poi = JSON.stringify(response);

        // await this.getUsers();
        // const user = this.users.get(email);
        // this.loggedInUser = user;
        // await this.getPOIs();
        // await this.getUserPOIs(this.loggedInUser._id);
        // await this.getCategories();
        // await this.getUserCategories();

        success = response.success;
      }
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
          <Form.Field
            id='form-input-control-email'
            control={Input}
            type='email'
            label='Email'
            placeholder='name@example.com'
            value='homer@simpson.com' // TODO remove
          />
          <Form.Field
            id='form-input-control-password'
            control={Input}
            type='password'
            label='Password'
            placeholder='********'
            value='secret' // TODO remove
          />
          <Button id='form-button-control-login' type='submit' color='blue'>Login</Button>
        </Form>
      </Segment>
    </Grid.Column>
  )
}

export default LoginForm;