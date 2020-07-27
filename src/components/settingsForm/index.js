import React from 'react';
import { Button, Form, Header, Input, Segment } from 'semantic-ui-react'

const SettingsForm = () => {
  return (
    <Segment fluid>
      <Form>
        <Header>User Settings</Header>
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
            id='form-button-control-update-settings'
            control={Button}
            content='Update'
            color='blue'
          />
      </Form>
    </Segment>
  )
}

export default SettingsForm;