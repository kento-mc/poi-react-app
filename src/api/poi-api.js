export const getPois = () => {
  return fetch(
    `http://localhost:3000/api/pois`
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