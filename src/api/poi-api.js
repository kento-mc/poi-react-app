export const getPois = () => {
  return fetch(
    `http://localhost:3000/api/pois`
  )
    .then(res => res.json())
    // .then(json => json.results);
};