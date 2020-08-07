import React from 'react';
import useForm from "react-hook-form";
import { Form, Grid, Segment, Input, Button, Header  } from 'semantic-ui-react';
import { authenticate } from '../../api/poi-api';

const LoginForm = ({ columns }) => {

  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = data => {
    authenticateUser(data.email, data.password);
  };

  const authenticateUser = async (email, password) => {
    let success = false;
    try {
      const response = await authenticate(email, password);
      console.log(response);
      const status = await response.content;
      if (status.success) {
        this.httpClient.configure((configuration) => {
          configuration.withHeader('Authorization', 'bearer ' + status.token);
        });
        localStorage.poi = JSON.stringify(response.content);
        await this.getUsers();
        const user = this.users.get(email);
        this.loggedInUser = user;
        await this.getPOIs();
        await this.getUserPOIs(this.loggedInUser._id);
        await this.getCategories();
        await this.getUserCategories();

        success = status.success;
      }
    } catch (e) {
      success = false;
    }
    return success;
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