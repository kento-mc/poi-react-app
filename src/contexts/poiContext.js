import React, { useReducer, createContext, useContext } from "react";
import { getUser, getPois, getCategories } from "../api/poi-api";
import { AuthContext } from './authContext2';

export const PoiContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load-all-pois":
      return { pois: [...action.payload.populatedPOIs]};
    case "load-user-pois":
      return { userPOIs: [...action.payload.uPOIs]};
    case "load-categories":
      return { categories: [...action.payload.cats]};
    case "load-custom-cats":
      return { userCustomCats: [...action.payload.uCats]};
    default:
      return state;
  }
};

const PoiContextProvider = (props) => {

  const authContext = useContext(AuthContext);

  const [state, dispatch] = useReducer(reducer, 
    { 
      pois: [],
      userPOIs: [],
      categories: [],
      userCustomCats: []
    }
  );

  const getPoiData = async (user) => {
    console.log(user);
    const rawPOIs = await getPois();
    const populatedPOIs = [];
    const cats = await getCategories();

    for (let rawPOI of rawPOIs) {
      const cats = [];
      const poiUser = await getUser(rawPOI.contributor);
      for (let catId of rawPOI.categories) {
        const cat = cats.filter((cat) => cat._id === catId);
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
    console.log('Populated pois:');
    console.log(populatedPOIs);
    dispatch({ type: "load-all-pois", payload: { populatedPOIs } });
    const uPOIs = populatedPOIs.filter(poi => poi.contributor._id === user._id);
    console.log('User pois:\n');
    console.log(uPOIs);
    dispatch({ type: "load-user-pois", payload: { uPOIs } });
    dispatch({ type: "load-categories", payload: { cats } });
    const uCats = cats.filter(cat => cat.contributor === user._id);
    dispatch({ type: "load-custom-cats", payload: { uCats } });

  };

  // const getUserPOIs = (user, pois) => {
  //   const uPOIs = pois.filter(poi => poi.contributor._id === user._id);
  //   console.log('User pois:\n');
  //   console.log(uPOIs);
  //   dispatch({ type: "load-user-pois", payload: { uPOIs } });
  // };

  // const getCats = async (user) => {
  //   const cats = await getCategories();
  //   dispatch({ type: "load-categories", payload: { cats } });
  //   const uCats = cats.filter(cat => cat.contributor === user._id);
  //   dispatch({ type: "load-custom-cats", payload: { uCats } });
  //   return cats;
  // };

  return (
    <PoiContext.Provider
      value={{
        pois: state.pois,
        userPOIs: state.userPOIs,
        categories: state.categories,
        getPoiData: getPoiData,
      }}
    >
      {props.children}
    </PoiContext.Provider>
  );
};

export default PoiContextProvider;