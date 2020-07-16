import React from "react";
import { Table } from 'semantic-ui-react';
import POI from '../poiListSingle';

const poiList = props => {
  const pois = props.pois.map(poi => (
    <POI key={poi.id} poi={poi} />
  ));

  return (
    <Table padded>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Image</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell>Location</Table.HeaderCell>
          <Table.HeaderCell>Categories</Table.HeaderCell>
          <Table.HeaderCell>Contributor</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {pois}
      </Table.Body>
    </Table>
  );
};

export default poiList;