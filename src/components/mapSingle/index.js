import React from 'react'
// import ReactDOM from 'react-dom';
import './map.css';
import { render } from 'react-dom'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

const position = [51.505, -0.09]

const PoiMap = (props) => {

  return (
    <Map center={position} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      <Marker position={position}>
        <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
      </Marker>
    </Map>
  )
}

export default PoiMap;
// render(map, document.getElementById('map-container'))

// const { Map: LeafletMap, TileLayer, Marker, Popup } = ReactLeaflet

// class SimpleExample extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       lat: 51.505,
//       lng: -0.09,
//       zoom: 13
//     }
//   }

//   render() {
//     const position = [this.state.lat, this.state.lng];
//     return (
//       <LeafletMap center={position} zoom={this.state.zoom}>
//         <TileLayer
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
//         />
//         <Marker position={position}>
//           <Popup>
//             A pretty CSS3 popup. <br/> Easily customizable.
//           </Popup>
//         </Marker>
//       </LeafletMap>
//     );
//   }
// }


// ReactDOM.render(<SimpleExample />, document.getElementById('map-container'))