const apiURL = 'http://localhost:3000'

const setFormBody = (details) => {
  let formBody = [];
  for (let property in details) {
    const encodedKey = encodeURIComponent(property);
    const encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  return formBody;
};

export const authenticate = (email, password) => {

  const details = {
    'email': email,
    'password': password,
    // 'grant_type': 'password'
  };

  const formBody = setFormBody(details);

  return fetch(
    `${apiURL}/api/users/authenticate`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: formBody
    }
  )
    .then(res => res.json())
};

export const getUsers = async () => {
  return fetch(
    `${apiURL}/api/users`, {
      method: 'get',
      credentials: 'omit',
      headers: {
        'Authorization': 'bearer ' + localStorage.getItem('token'), 
        'Content-Type': 'application/json'
      },  
    }
  )
  .then(res => res.json())
};

export const getUser = async (userID) => {
  return fetch(
    `${apiURL}/api/users/${userID}`, {
      method: 'get',
      credentials: 'omit',
      headers: {
        'Authorization': 'bearer ' + localStorage.getItem('token'), 
        'Content-Type': 'application/json'
      },  
    }
  )
  .then(res => res.json())
};

export const getPois = async () => {
  return fetch(
    `${apiURL}/api/pois`, {
      method: 'get',
      headers: {
        'Authorization': 'bearer ' + localStorage.getItem('token'), 
      },  
    }
  )
  .then(res => res.json())
};

export const getCategories = async () => {
  return fetch(
    `${apiURL}/api/categories`, {
      method: 'get',
      headers: {
        'Authorization': 'bearer ' + localStorage.getItem('token'), 
      },  
    }
  )
  .then(res => res.json())
};

export const getCategory = async (id) => {
  return fetch(
    `${apiURL}/api/categories/${id}`, {
      method: 'get',
      headers: {
        'Authorization': 'bearer ' + localStorage.getItem('token'), 
      },  
    }
  )
  .then(res => res.json())
};

export const addPOI = (submittedPOI) => {

  const formBody = setFormBody(submittedPOI);

  return fetch(
    `${apiURL}/api/pois`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: formBody
    }
  )
    .then(res => res.json())
};

export const uploadImage = async (file) => {

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'asbqtcgx');

  // try {
  //   const response = await cloudClient.post('/image/upload', formData);
  //   console.log(response.content);
  //   return response.content;
  // } catch (err) {
  //   console.log(err)
  // }
  return fetch(
    `https://api.cloudinary.com/v1_1/dwgak0rbs'/image/upload`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: 'formBody'
    }
  )
    .then(res => res.json())
}