const apiURL = 'http://localhost:3000'

export const authenticate = (email, password) => {

  const details = {
    'email': 'homer@simpson.com',
    'password': 'secret',
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

export const getPois = () => {
  return fetch(
    `${apiURL}/api/pois`
  )
    .then(res => res.json())
    // .then(json => json.results);
};

// export const getPois = () => {
//   return fetch(
//     `http://localhost:3000/api/pois`, {
//       method: 'get',
//       headers: new Headers({
//         'Authorization': loggedInUser.token, 
//       }),  
//     }
//   )
//   .then(res => res.json())
//   // .then(json => json.results);
// };