import React from 'react';
import { Grid } from 'semantic-ui-react'

const Panel = (props) => {
  return (
    <Grid.Column width={props.columnCount}>
      {props.children}
    </Grid.Column>
  )
};

export default Panel;