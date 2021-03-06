import React from "react";
import { storiesOf } from "@storybook/react";
import 'fomantic-ui-css/semantic.css';
import { Table } from 'semantic-ui-react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import TemplateGlobal from '../src/components/templateGlobal';
import NavBar from '../src/components/navBar';
import POIList from '../src/components/poiList';
import POI from '../src/components/poiListSingle';
import DashboardPage from '../src/pages/dashboardPage';
import AddPoiForm from '../src/components/addPoiForm';
import FilterBar from '../src/components/filterBar';
import AddCategories from "../src/components/addCategories";
import PoiDetailPage from "../src/pages/poiDetailPage";
import PoiMap from "../src/components/poiMap";
import ImageGallery from "../src/components/imageGallery";
import PoiListPage from "../src/pages/poiListPage";
import SettingsPage from "../src/pages/settingsPage";
import LoginPage from "../src/pages/loginPage";
import SignupPage from "../src/pages/signupPage";

const samplePOI = {
  "id": 1,
  "name": "The Murderhorn",
  "description": "The murderiest mountain in Springfield",
  "location": {
    "lat": 30.23,
    "lon": -30.234
  },
  "categories": [
    "Walk",
    "Dining",
    "Drive"
  ],
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

const sampleUser = {
  firstName: 'Homer',
  lastName: 'Simpson',
  fullName: 'Homer Simpson',
  isAdmin: false
};

storiesOf("Global/Template Global", module)
  .add("default", () => {
    return <TemplateGlobal />
});

storiesOf("Global/Nav Bar", module)
  .add("default", () => {
    return <NavBar user={sampleUser} />
  })
  .add("logged out", () => {
    return <NavBar />
});

storiesOf("POI List Container/POI List Item", module)
  .add("default", () => {
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
          <POI poi={samplePOI} />
        </Table.Body>
      </Table>
    )
  })
  .add("exception", () => {
    const samplePOINoThumbnail = { ...samplePOI, thumbnailURL: undefined };
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
          <POI poi={samplePOINoThumbnail} />
        </Table.Body>
      </Table>
    )
  });

storiesOf("POI List Page/POI List", module)
  .add("default", () => {
    const pois= [samplePOI, samplePOI, samplePOI, samplePOI, samplePOI]
    return <POIList pois={pois} />
});

storiesOf("Dashboard/Add POI Form", module)
  .add("default", () => {
    return <AddPoiForm />
});

storiesOf("Dashboard/Filter Bar", module)
  .add("default", () => {
    return <FilterBar />
});

storiesOf("Dashboard/Add Categories", module)
  .add("default", () => {
    return <AddCategories />
});

storiesOf("POI Detail/POI Map", module)
  .add("default", () => {
    const poi = samplePOI;
    return <PoiMap poi={poi}/>
});

storiesOf("POI Detail/Image Gallery", module)
  .add("default", () => {
    const poi = samplePOI;
    return <ImageGallery poi={poi}/>
});

storiesOf("Pages/Dashboard", module)
  .add("default", () => {
    const pois= [samplePOI, samplePOI, samplePOI, samplePOI, samplePOI]
    return <DashboardPage user={sampleUser} pois={pois}/>
  })
  .add("empty", () => {
  return <DashboardPage user={sampleUser} />
});

storiesOf("Pages/POI List", module)
  .add("default", () => {
    const pois= [samplePOI, samplePOI, samplePOI, samplePOI, samplePOI]
    return <PoiListPage user={sampleUser} pois={pois}/>
  })
  .add("empty", () => {
  return <PoiListPage user={sampleUser} />
});

storiesOf("Pages/POI Detail", module)
  .add("default", () => {
    const poi = samplePOI;
    return <PoiDetailPage user={sampleUser} poi={poi}/>
});

storiesOf("Pages/Settings", module)
  .add("default", () => {
    return <SettingsPage user={sampleUser} />
});

storiesOf("Pages/Login", module)
  .add("default", () => {
    return <LoginPage />
});

storiesOf("Pages/Sign Up", module)
  .add("default", () => {
    return <SignupPage />
});