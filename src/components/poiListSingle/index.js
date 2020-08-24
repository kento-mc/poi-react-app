import React from "react";
import { Link } from "react-router-dom";
import { Image, Table } from 'semantic-ui-react';

const poiListSingle = ({ poi }) => {
  return (
    <Table.Row>
      <Table.Cell>
        <Image alt="poi thumbnail" width="150" height="70"
          src={
            poi.thumbnailURL
            ? poi.thumbnailURL
            : "./film-poster-placeholder.png"
          }>
        </Image>
      </Table.Cell>
      <Table.Cell>{poi.name}</Table.Cell>
      <Table.Cell>{poi.description}</Table.Cell>
      <Table.Cell>
        <div>Lat: {poi.location.lat}</div>
        <div>Lon: {poi.location.lon}</div>
      </Table.Cell>
      <Table.Cell>
        {poi.categories.map((cat, i) => (
            <div key={cat._id}>{cat.name}</div>
        ))}
      </Table.Cell>
      <Table.Cell>{poi.contributor.fullName}</Table.Cell>
    </Table.Row>
  );
};

export default poiListSingle;