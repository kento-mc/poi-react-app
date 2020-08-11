import React, { useContext, useEffect } from 'react';
import useForm from "react-hook-form";
import { Form, Grid, Segment, Input, Button, Header  } from 'semantic-ui-react';
import { Redirect } from "react-router-dom";
import { authenticate, getUsers, getUser, getPois } from '../../api/poi-api';
import { AuthContext } from '../../contexts/authContext';
import { withRouter } from "react-router-dom";


const LoginForm = ({ columns }) => {

  const authContext = useContext(AuthContext);

  const { register, errors, handleSubmit, setValue, triggerValidation } = useForm();

  useEffect(() => {
    register({ name: "email" }, { required: true });
    register({ name: "password" }, { required: true });
  }, [register]);

  const onSubmit = (data, e) => {
    console.log(data, e);
    authenticateUser(data.email, data.password);
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
          <Form.Group widths="equal">
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
              fluid
              label='Password'
              placeholder='*********'
              onChange={async (e, { name, value }) => {
                setValue(name, value);
                await triggerValidation({ name });
              }}
              error={errors.lastName ? true : false}
            />
          </Form.Group>
          <Button type='submit' color='blue'>Submit</Button>
        </Form>
      </Segment>
    </Grid.Column>
  );
};






  // const handleChange = (e) => {
  //   console.log(e);
  //   setValue('email', e.target.value);
  //   setValue('password', e.taret.value);
  // }
  // const onSubmit = (data) => {
  //   console.log(data);
  //   authenticateUser(data.email, data.password);
  //   // return success ? <Redirect to='/dashboard' /> : <Redirect to='/' />;
  // };

  // const authenticateUser = async (email, password) => {
  //   let success = false;
  //   let response;
  //   try {
  //     authContext.submitCredentials(email, password);
  //     response = await authenticate(email, password);
  //     console.log(response);
  //     if (response.success) {
  //       authContext.updateAuth(true, response.token);
  //       const users = await getUsers();
  //       console.log(users);
  //       // const pois = getPois(authContext.token);
  //       // console.log(pois);
  //       // window.localStorage.poi = JSON.stringify(response);

  //       // await this.getUsers();
  //       // const user = this.users.get(email);
  //       // this.loggedInUser = user;
  //       // await this.getPOIs();
  //       // await this.getUserPOIs(this.loggedInUser._id);
  //       // await this.getCategories();
  //       // await this.getUserCategories();

  //       success = response.success;
  //     }
  //   } catch (e) {
  //     success = false;
  //   }
  //   return response;
  // }

  // return (
  //   <Grid.Column width={columns}>
  //     <Segment fluid>
  //       <Form onSubmit={handleSubmit(onSubmit)}>
  //         <Header>Login</Header>
  //         <Form.Input
  //           onChange={handleChange}
  //           id='form-input-control-email'
  //           name='email' 
  //           type='email'
  //           label='Email'
  //           placeholder='name@example.com'
  //           defaultValue='homer@simpson.com' // TODO remove
  //           // onChange={async (e, { name, value }) => {
  //           //   setValue(name, value);
  //           //   await triggerValidation({ name });
  //           // }}
  //           error={errors.firstName ? true : false}
  //         />
  //         <Form.Input
  //           onChange={handleChange}
  //           id='form-input-control-password'
  //           name='email'
  //           type='password'
  //           label='Password'
  //           placeholder='********'
  //           defaultValue='secret' // TODO remove
  //           // onChange={async (e, { name, value }) => {
  //           //   setValue(name, value);
  //           //   await triggerValidation({ name });
  //           // }}
  //         />
  //         <Button id='form-button-control-login' type='submit' color='blue'>Login</Button>
  //       </Form>
  //     </Segment>
  //   </Grid.Column>
  // )
// };

export default withRouter(LoginForm);