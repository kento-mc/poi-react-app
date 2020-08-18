const apiURL = 'http://localhost:3000'

export const authenticate = (email, password) => {

  const details = {
    'email': email,
    'password': password,
    // 'grant_type': 'password'
  };

  let formBody = [];
  for (let property in details) {
    const encodedKey = encodeURIComponent(property);
    const encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

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
  // .then(json => json.results);
};

export const getUser = async (user) => {
  return fetch(
    `${apiURL}/api/users/${user.id}`, {
      method: 'get',
      credentials: 'omit',
      headers: {
        'Authorization': 'bearer ' + localStorage.getItem('token'), 
        'Content-Type': 'application/json'
      },  
    }
  )
  .then(res => res.json())
  // .then(json => json.results);
};

// export const getPois = () => {
//   return fetch(
//     `${apiURL}/api/pois`
//   )
//     .then(res => res.json())
//     // .then(json => json.results);
// };

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
  // .then(json => json.results);
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
  // .then(json => json.results);
};