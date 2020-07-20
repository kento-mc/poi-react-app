import React from "react";
import { Table } from 'semantic-ui-react';
import POI from '../poiListSingle';
import FilterBar from "../filterBar";

const poiList = ({ pois }) => {

  const poiList = pois?.map(poi => (
    <POI key={poi.id} poi={poi} />
  ));

  return (
    <>
      <FilterBar />
      <Table>
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
          {poiList}
        </Table.Body>
      </Table>
    </>
  );
};

export default poiList;