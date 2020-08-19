import React, { useEffect, useState, useReducer, createContext, useContext } from "react";
import { getUser, getPois, getCategory } from "../api/poi-api";
import { AuthContext } from '../contexts/authContext';

export const PoisContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        movies: state.movies.filter((m) => m.id !== action.payload.movie.id),
        favorites: [...state.favorites, action.payload.movie],
      };
    case "load-all-pois":
      return { pois: [...action.payload.pois]};
    case "add-review":
      return {
        movies: [...state.movies],
        favorites: [
          ...state.favorites.filter((m) => m.id !== action.payload.movie.id),
          { ...action.payload.movie, review: action.payload.review },
        ],
      };
    default:
      return state;
  }
};

const PoisContextProvider = (props) => {



//////////////////////////////////////////////////////

  const [pois, setPois] = useState([]);
  const [poiUser, setPoiUser] = useState(null);
  const [userPOIs, setUserPOIs] = useState([]);

  // useEffect(() => {
  //   getAllPOIs()
  // }, []);

  useEffect(() => {
    if (poiUser) getUserPOIs(poiUser);
  }, [poiUser]);

  // const getAllPOIs = async (user) => {
  //   const pois = await getPois();
  //   setPois(pois);
  //   setPoiUser(user);
  // };

  const getAllPOIs = async (user) => {

    const rawPOIs = await getPois();
    const populatedPOIs = [];

    for (let rawPOI of rawPOIs) {
      const cats = [];
      const poiUser = await getUser(rawPOI.contributor);
      for (let catId of rawPOI.categories) {
        const cat = await getCategory(catId)
        cats.push(cat);
      }
      const poi = {
        name: rawPOI.name,
        description: rawPOI.description,
        location: {
          lat: rawPOI.location.lat,
          lon: rawPOI.location.lon,
        },
        categories: cats,
        imageURL: rawPOI.imageURL,
        thumbnailURL: rawPOI.thumbnailURL,
        contributor: poiUser,
        _id: rawPOI._id
      }
      populatedPOIs.push(poi)
    }
    console.log(populatedPOIs);
    setPois(populatedPOIs);
    setPoiUser(user);
  };




  const getUserPOIs = (user) => {
    const uPOIs = pois.filter(poi => poi.contributor === user._id);
    console.log(uPOIs);
    setUserPOIs(uPOIs);
  };

//////////////////////////////////////////////////////



  // const authContext = useContext(AuthContext);

  // const [state, dispatch] = useReducer(reducer, { pois: []});

  // const addToFavorites = (movieId) => {
  //   const index = state.movies.map((m) => m.id).indexOf(movieId);
  //   dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  // };

  // const addReview = (movie, review) => {
  //   dispatch({ type: "add-review", payload: { movie, review } });
  // }; 

  // useEffect(() => {
  //   const getAllPOIs = async () => {
  //     console.log(authContext.auth);

  //     const pois = await getPois();
  //     dispatch({ type: "load-all-pois", payload: { pois } });
  //   };
  //   // if (authContext.auth) {
  //     getAllPOIs();
  //   // }
  // }, [authContext.auth]);

  return (
    <PoisContext.Provider
      value={{
        pois: pois,
        userPOIs: userPOIs,
        getAllPOIs: getAllPOIs,
        getUserPOIs: getUserPOIs
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