import React from "react";
import { storiesOf } from "@storybook/react";
import 'fomantic-ui-css/semantic.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import POIList from '../src/components/poiList';
import POI from '../src/components/poiListSingle';

const samplePOI = {
  "id": 1,
  "name": "The Murderhorn",
  "description": "The murderiest mountain in Springfield",
  "location": {
    "lat": 30.23,
    "lon": -30.234
  },
  "categories": [],
  "imageURL": [
    "http://res.cloudinary.com/dwgak0rbs/image/upload/v1583704472/gimkezvtnsmjosc4wg6e.png",
    "http://res.cloudinary.com/dwgak0rbs/image/upload/v1583704498/bmcsxbgu8xqgri9tljda.png",
    "http://res.cloudinary.com/dwgak0rbs/image/upload/v1584097825/f0tfapuxhepkgbrcfabk.jpg"
  ],
  "thumbnailURL": "http://res.cloudinary.com/dwgak0rbs/image/upload/v1583704472/gimkezvtnsmjosc4wg6e.png",
  "contributor": {
    fullName: "Homer Simpson"
  }
};

storiesOf("POI List Page/POI", module)
  .add("default", () => <POI poi={samplePOI} />)
  .add("exception", () => {
    const samplePOINoThumbnail = { ...samplePOI, thumbnailURL: undefined };
    return <POI poi={samplePOINoThumbnail} />;
  });

storiesOf("POI List Page/POIList", module)
  .add("default", () => {
    const pois= [samplePOI, samplePOI, samplePOI, samplePOI, samplePOI]
    return <POIList pois={pois} />
});
