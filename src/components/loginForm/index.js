import React from 'react';
import { Form, Grid, Segment, Input, Button, Header  } from 'semantic-ui-react';

const LoginForm = ({ columns }) => {
  return (
    <Grid.Column width={columns}>
      <Segment fluid>
        <Form>
          <Header>Login</Header>
          <Form.Field
            id='form-input-control-email'
            control={Input}
            type='email'
            label='Email'
            placeholder='name@example.com'
          />
          <Form.Field
            id='form-input-control-password'
            control={Input}
            type='password'
            label='Password'
            placeholder='********'
          />
          <Form.Field
            id='form-button-control-login'
            control={Button}
            content='Login'
            color='blue'
          />
        </Form>
      </Segment>
    </Grid.Column>
  )
}

export default LoginForm;