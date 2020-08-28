import React from 'react'
import './poiMap.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const PoiMap = ({ poi, pois }) => {

  const position = poi ? [poi.location.lat, poi.location.lon] : [0, 0];
  const zoom = poi ? 5 : 1;
  const popup = (poi) => (
    <>
      {poi.name}<br />{`${poi.location.lat}, ${poi.location.lon}`}
    </>
  );

  return (
    <Map center={position} zoom={zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      { poi ?
        <Marker position={position}>
          <Popup>{popup(poi)}.</Popup>
        </Marker>
        :
        <>
          {pois.map(poi => (
            <Marker 
              key={poi._id}
              position={[poi.location.lat, poi.location.lon]}>
              <Popup>{popup(poi)}.</Popup>
            </Marker>
          ))}     
        </>
      }
    </Map>
  )
}

export default PoiMap;
