const apiURL = 'https://salty-gorge-71487.herokuapp.com';
// const apiURL = 'http://localhost:3000';

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

export const addUser = async (credentials) => {

  const formBody = setFormBody(credentials);

  return fetch(
    `${apiURL}/api/users`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: formBody
    }
  )
    .then(res => res.json())
}

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

export const addCategory = async (id, cat) => {

  const details = {
    'name': cat,
    // 'grant_type': 'password'
  };

  const formBody = setFormBody(details);

  return fetch(
    `${apiURL}/api/users/${id}/categories`, {
      method: 'post',
      headers: {
        'Authorization': 'bearer ' + localStorage.getItem('token'), 
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },   
      body: formBody
    }
  )
  .then(res => res.json())
};

export const addPOI = async (poi) => {

  const setPoiFormBody = (poi) => {
    let formBody = [];
    for (let property in poi) {
      const encodedKey = encodeURIComponent(property);
      let encodedValue =''
      if (property === 'location') {
        encodedValue = encodeURIComponent([poi.location.lat, poi.location.lon]);
      } else if (property === 'categories') {
        encodedValue = encodeURIComponent([...poi.categories]);
      } else {
        encodedValue = encodeURIComponent(poi[property]);
      }
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    return formBody;
  };

  const formBody = setPoiFormBody(poi);

  return fetch(
    `${apiURL}/api/pois`, {
      method: 'post',
      headers: {
        'Authorization': 'bearer ' + localStorage.getItem('token'), 
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

  // const details = {
  //   'file': file,
  //   'upload_preset': 'asbqtcgx',
  // };

  // const formBody = setFormBody(details)

  return fetch(
    `https://api.cloudinary.com/v1_1/dwgak0rbs/image/upload`, {
      method: 'post',
      mode: 'cors',
      // headers: {
      //   'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      // },
      body: formData
    }
  )
    .then(res => res.json())
}