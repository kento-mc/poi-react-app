import React, { useEffect, useState } from 'react';
import useForm from "react-hook-form";
import { Form, Segment, Grid, TextArea, Button, Select, Header  } from 'semantic-ui-react';
import { addPOI } from '../../api/poi-api';
import ImageUploader from '../../components/imageUploader';

const AddPoiForm = ({categories}) => {

  // const [poiToSubmit, setPoiToSubmit] = useState({});
  const [formImage, setFormImage] = useState('');

  const { register, errors, handleSubmit, setValue, triggerValidation } = useForm();

  useEffect(() => {
    register({ name: "name" }, { required: true });
    register({ name: "description" }, { required: true });
    register({ name: "latitude" }, { required: false });
    register({ name: "longitude" }, { required: false });
    register({ name: "categories" }, { required: false });
  }, [register]);

  const categoryOptions = categories.map((cat, i) => (
    { key: i, text: cat.name, value: cat.name }
  ));

  const onSubmit = (data, e) => {
    console.log(e, data);
    // const catStrings = [];

    // const poiPayload = {
    //   name: data.name,
    //   description: data.description,
    //   location: {
    //     lat: data.latitude,
    //     lon: data.longitude,
    //   },
    //   categories: data.categories,
    //   imageURL: imageURL,
    //   thumbnailURL: imageURL[0],
    //   contributor: this.loggedInUser._id
    // }

    // const response = await this.httpClient.post('/api/pois', poiPayload);

    // const poi = poiPayload;
    // const poiCats = []
    // for (let catString of selectedCategories) {
    //   let category = await this.getCategoryById(catString);
    //   poiCats.push(category)
    // }
    // poi.categories = poiCats;
    // poi.contributor = this.loggedInUser;
    // this.pois.push(poi);
    // this.loggedInUser.contributedPOIs++;
  };

  const handleImageFile = (image) => {
    console.log(image);
    setFormImage(image.name);
  };

  return (
    <Segment>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Header>Add a new Point of Interest</Header>
        <Form.Input
          name='name'
          fluid
          label='Name'
          placeholder='Name'
          onChange={async (e, { name, value }) => {
            setValue(name, value);
            await triggerValidation({ name });
          }}
          error={errors.firstName ? true : false}
        />
        <Form.Input
          name='description'
          control={TextArea}
          fluid
          label='Description'
          placeholder='Description'
          onChange={async (e, { name, value }) => {
            setValue(name, value);
            await triggerValidation({ name });
          }}
          error={errors.lastName ? true : false}
        />
        <Grid>
          <Grid.Column width='7'>
            <ImageUploader handleImageFile={handleImageFile} />
          </Grid.Column>
          <Grid.Column width='9'>
            <p>{formImage}</p>
          </Grid.Column>
        </Grid>
        <br />
        <Form.Group widths='equal'>
          <Form.Input
            name='latitude'
            fluid
            label='Latitude'
            placeholder='0.000000'
            onChange={async (e, { name, value }) => {
              setValue(name, value);
              await triggerValidation({ name });
            }}
            error={errors.lastName ? true : false}
          />
          <Form.Input
            name='longitude'
            fluid
            label='Longitude'
            placeholder='0.000000'
            onChange={async (e, { name, value }) => {
              setValue(name, value);
              await triggerValidation({ name });
            }}
            error={errors.lastName ? true : false}
          />
        </Form.Group>
        <Form.Input
            name='categories'
            control={Select}
            fluid multiple selection options={categoryOptions}
            label='Categories'
            placeholder='Categories'
            onChange={async (e, { name, value }) => {
              setValue(name, value);
              await triggerValidation({ name });
            }}
            error={errors.lastName ? true : false}
          />
        <Button type='submit' color='blue'>Submit</Button>
      </Form>
    </Segment>
  )
};

export default AddPoiForm;