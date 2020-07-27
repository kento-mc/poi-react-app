import React from 'react';
import { Form, Grid, Segment, Input, Button, Header  } from 'semantic-ui-react';

const SignupForm = ({ columns }) => {
  return (
    <Grid.Column width={columns}>
      <Segment fluid>
        <Form>
          <Header>Sign Up</Header>
          <Form.Group widths='equal'>
            <Form.Field
              id='form-input-control-fname'
              control={Input}
              label='First Name'
              placeholder='First Name'
            />
            <Form.Field
              id='form-input-control-lname'
              control={Input}
              label='Last Name'
              placeholder='Last Name'
            />
          </Form.Group>
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
            content='Sign Up'
            color='blue'
          />
        </Form>
      </Segment>
    </Grid.Column>
  )
}

export default SignupForm;