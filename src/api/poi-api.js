const apiURL = 'http://localhost:3000'

export const authenticate = (email, password) => {
  return fetch(
    `${apiURL}/api/users/authenticate`, {
      method: 'post',
      headers: new Headers({
        'Authorization': 'something'
      }),
      body: JSON.stringify({
        email: email,
        password: password
      })
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