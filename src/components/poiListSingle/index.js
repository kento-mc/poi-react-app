import React from "react";
import './poiListSingle.css';
import { withRouter } from "react-router-dom";
import { Image, Table } from 'semantic-ui-react';

const PoiListSingle = ({ poi, isDashboard, history }) => {

  const handleClick = (id) => {
    history.push({
      pathname: `/pois/${id}`,
      state: { poi: poi }
    });
  };

  return (
    <Table.Row
      className='poi-row'
      onClick={() => {
        handleClick(poi._id);
      }}
    >
      <Table.Cell>
        <Image alt="poi thumbnail" width="150" height="70"
          src={
            poi.thumbnailURL
            ? poi.thumbnailURL
            : '../../../public/film-poster-placeholder.png'
          } 
        />
      </Table.Cell>
      <Table.Cell>{poi.name}</Table.Cell>
      <Table.Cell>{poi.description.slice(0, 50)}...</Table.Cell>
      <Table.Cell>
        <div>Lat: {poi.location.lat}</div>
        <div>Lon: {poi.location.lon}</div>
      </Table.Cell>
      <Table.Cell>
        {poi.categories.map((cat, i) => (
            <div key={cat._id}>{cat.name}</div>
        ))}
      </Table.Cell>
      { isDashboard 
        ? <></>
        : <Table.Cell>{poi.contributor.fullName}</Table.Cell>
      }
    </Table.Row>
  );
};

export default withRouter(PoiListSingle);