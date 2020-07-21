import React from 'react';
import { Grid, Segment } from 'semantic-ui-react'
import NavBar from '../navBar';

const templateGlobal = (props) => {
  return (
    <>
      <NavBar user={props.user} />
      <Segment raised fluid>
        <Grid>
          {props.children}
        </Grid>
      </Segment>
    </>
  )
};

export default templateGlobal;