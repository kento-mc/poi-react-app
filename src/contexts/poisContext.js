import React, { useEffect, useState, createContext, useContext } from "react";
import { getPois } from "../api/poi-api";
import { AuthContext } from '../contexts/authContext';

export const PoisContext = createContext(null);

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "add-favorite":
//       return {
//         movies: state.movies.filter((m) => m.id !== action.payload.movie.id),
//         favorites: [...state.favorites, action.payload.movie],
//       };
//     case "load-pois":
//       return { pois: [...action.payload.pois]};
//     case "add-review":
//       return {
//         movies: [...state.movies],
//         favorites: [
//           ...state.favorites.filter((m) => m.id !== action.payload.movie.id),
//           { ...action.payload.movie, review: action.payload.review },
//         ],
//       };
//     default:
//       return state;
//   }
// };

const PoisContextProvider = (props) => {

  const [pois, setPois] = useState([]);

  const authContext = useContext(AuthContext);

  useEffect(() => {
    fetchPOIs()
  }, [authContext.auth]);

  const fetchPOIs = async () => {
    const pois = await getPois();
    setPois(pois);
  };
  

  // const [state, dispatch] = useReducer(reducer, { pois: []});

  // const addToFavorites = (movieId) => {
  //   const index = state.movies.map((m) => m.id).indexOf(movieId);
  //   dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  // };

  // const addReview = (movie, review) => {
  //   dispatch({ type: "add-review", payload: { movie, review } });
  // }; 

  // useEffect(() => {
  //   getPois().then((pois) => {
  //     dispatch({ type: "load-pois", payload: { pois } });
  //   });
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <PoisContext.Provider
      value={{
        pois: pois
        // favorites: state.favorites,
        // addToFavorites: addToFavorites,
        // addReview: addReview,
      }}
    >
      {props.children}
    </PoisContext.Provider>
  );
};

export default PoisContextProvider;