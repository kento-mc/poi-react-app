import React from 'react';
import { Container, Grid, Segment } from 'semantic-ui-react'
import NavBar from '../navBar';

const templateGlobal = (props) => {
  return (
    <>
      <Container> {/*TODO adjust max width*/}
        <NavBar user={props.user} />
        <Segment raised>
          <Grid>
            {props.children}
          </Grid>
        </Segment>
      </Container>
    </>
  )
};

export default templateGlobal;