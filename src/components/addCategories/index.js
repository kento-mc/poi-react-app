import React, { useEffect, useState } from 'react';
import useForm from "react-hook-form";
import { Card, Form, Segment, Button, Input, Header, Table  } from 'semantic-ui-react';
import { addCategory } from '../../api/poi-api';

const AddCategories = ({ user, userCategories, setUserCategories, catCount }) => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newCatPayload, setNewCatPayload] = useState(null);
  const [newCat, setNewCat] = useState(null);

  const { register, errors, handleSubmit, setValue, triggerValidation, reset } = useForm();

  useEffect(() => {
    register({ name: "category" }, { required: true });
  }, [register]);

  useEffect(() => {
    reset('');  
    const sendCat = async (id, cat) => {
      const newC = await addCategory(id, cat);
      setNewCat(newC);
      setUserCategories(user, [...userCategories, newC])
    }
    if (newCatPayload) sendCat(user._id, newCatPayload);
  }, [newCatPayload]);

  useEffect(() => {
    if (newCat) window.location.reload(false);
    setIsSubmitting(false);
  }, [catCount])


  const catHeader = `Custom Categories`;

  const catList = userCategories?.map((cat, i) => (
    <Card key={cat._id}>
      <Button disabled basic size='mini'>{cat.name}</Button>
    </Card>
  ));

  const onSubmit = (e, data) => {
    setIsSubmitting(true)
    setNewCatPayload(e.category);
    reset({
      'category': ''
    });
  };

  return (
    <Segment loading={isSubmitting}>
      <Table basic='very' compact='very'>
        <Table.Body>
          <Table.Row>
            <Table.Cell verticalAlign='middle'>
              <Header as='h4' floated='left'>{catHeader}</Header>
            </Table.Cell>
            <Table.Cell>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Input
                  name='category'
                  
                  label=''
                  placeholder='Add new category'
                  action={
                    <Button content='+' color='blue' />
                  }
                  onChange={async (e, { name, value }) => {
                    setValue(name, value);
                    await triggerValidation({ name });
                  }}
                  error={errors.lastName ? true : false}
                />
              </Form> 
            </Table.Cell>
          </Table.Row>  
        </Table.Body>
      </Table>
      <Card.Group stackable={true} itemsPerRow='3'>
        {catList}
      </Card.Group>
    </Segment>
  )
}

export default AddCategories;