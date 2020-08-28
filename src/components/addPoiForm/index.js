import React, { useEffect, useState } from 'react';
import useForm from "react-hook-form";
import { Form, Segment, Grid, TextArea, Button, Select, Header  } from 'semantic-ui-react';
import { addPOI, uploadImage } from '../../api/poi-api';
import ImageUploader from '../../components/imageUploader';

const AddPoiForm = ({ user, categories, updatePOIs, poiCount }) => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formImageName, setFormImageName] = useState('');
  const [submittedImage, setSubmittedImage] = useState(null);
  const [cloudinaryImageData, setCloudinaryImageData] = useState(null);
  const [poiImageUrl, setPoiImageUrl] = useState(null);
  const [poiPayload, setPoiPayload] = useState(null);
  const [newPOI, setNewPOI] = useState(null);

  const { register, errors, handleSubmit, setValue, triggerValidation, reset } = useForm();

  useEffect(() => {
    register({ name: "name" }, { required: true });
    register({ name: "description" }, { required: true });
    register({ name: "latitude" }, { required: false });
    register({ name: "longitude" }, { required: false });
    register({ name: "categories" }, { required: false });
  }, [register]);

  useEffect(() => {
    if (submittedImage) {
      const getImage = async (image) => {
        const res = await uploadImage(image);
        setCloudinaryImageData(res);
      }
      getImage(submittedImage);
    }
  }, [submittedImage]);

  useEffect(() => {
    console.log(cloudinaryImageData);
    if (cloudinaryImageData) setPoiImageUrl(cloudinaryImageData.url);
  }, [cloudinaryImageData]);

  const categoryOptions = categories.map((cat, i) => (
    { key: i, text: cat.name, value: cat }
  ));

  useEffect(() => {
    if (poiPayload !== null) {
      const addNewPOI = async (poi) => {
        const res = await addPOI(poi);
        console.log('Response:', res)
        setNewPOI(res);
        return res;
      }
      const newPOI = addNewPOI(poiPayload);
      console.log(newPOI);
    }
  }, [poiPayload]);

  useEffect(() => {
    if (newPOI) {
      updatePOIs(user);
      console.log('New POI:', newPOI);
    }
  }, [newPOI]);


  useEffect(() => {
    setIsSubmitting(false);
    if (newPOI) window.location.reload(false);
  }, [poiCount])

  const onSubmit = (data, e) => {
    setIsSubmitting(true);
    console.log(e, data);
    e.target.reset();
    setFormImageName('');
  
    const catIds = [];
    for (let cat of data.categories) {
      catIds.push(cat._id);
    }
    console.log(data.latitude);

    const poiPayload = {
      name: data.name,
      description: data.description,
      location: {
        lat: data.latitude,
        lon: data.longitude,
      },
      categories: catIds,
      imageURL: poiImageUrl ? [poiImageUrl] : null,
      thumbnailURL: poiImageUrl ? poiImageUrl : null,
      contributor: user._id
    }

    setPoiPayload(poiPayload);
  };

  const handleImageFile = (image) => {
    console.log(image);
    setFormImageName(image.name);
    setSubmittedImage(image);
  };

  // if (isSubmitting) {
  //   return (
  //     <Segment>
  //       <Loader active inline='centered' size='large'/>
  //     </Segment>
  //   )
  // }
  return (
    <Segment loading={isSubmitting}>
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
            <p>{formImageName}</p>
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