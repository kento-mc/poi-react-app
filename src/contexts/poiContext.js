import React, { useReducer, createContext } from "react";
import { getUser, getPois, getCategories } from "../api/poi-api";

export const PoiContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load-all-pois":
      return { 
        pois: [...action.payload.pois],
        userPOIs: [...state.userPOIs],
        categories: [...state.categories],
        userCustomCats: [...state.userCustomCats]
      };
    case "load-user-pois":
      return { 
        pois: [...state.pois],
        userPOIs: [...action.payload.uPOIs],
        categories: [...state.categories],
        userCustomCats: [...state.userCustomCats]
      };
    case "load-categories":
      return { 
        pois: [...state.pois],
        userPOIs: [...state.userPOIs],
        categories: [...action.payload.cats],
        userCustomCats: [...state.userCustomCats]
      };
    case "load-custom-cats":
      return { 
        pois: [...state.pois],
        userPOIs: [...state.userPOIs],
        categories: [...state.categories],
        userCustomCats: [...action.payload.uCats]
      };
    default:
      return state;
  }
};

const PoiContextProvider = (props) => {

  const [state, dispatch] = useReducer(reducer, 
    { 
      pois: [],
      userPOIs: [],
      categories: [],
      userCustomCats: []
    }
  );

  const getPoiData = async (user) => {

    const rawPOIs = await getPois();
    const cats = await getCategories();
    console.log('API cat data from PoiContext:');
    console.log(cats);
    const populatedPOIs = [];

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
    // console.log('Populated pois:');
    // console.log(populatedPOIs);
    // dispatch({ type: "load-all-pois", payload: { populatedPOIs } });
    // const uPOIs = populatedPOIs.filter(poi => poi.contributor._id === user._id);
    // console.log('User pois from PoiContext:');
    // console.log(uPOIs);
    // dispatch({ type: "load-user-pois", payload: { uPOIs } });
    // dispatch({ type: "load-categories", payload: { cats } });
    // const uCats = cats.filter(cat => cat.contributor === user._id);
    // dispatch({ type: "load-custom-cats", payload: { uCats } });
    return {pois: populatedPOIs, cats: cats};
  };


  const setPOIs = pois => {
    dispatch({ type: "load-all-pois", payload: { pois } });
  };

  const setUserPOIs = (user, pois) => {
    const uPOIs = pois.filter(poi => poi.contributor._id === user._id);
    dispatch({ type: "load-user-pois", payload: { uPOIs } });
  };

  const setCategories = (cats) => {
    dispatch({ type: "load-categories", payload: { cats } });
  };

  const setUserCategories = (user, cats) => {
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
        userCustomCats: state.userCustomCats,
        getPoiData: getPoiData,
        setPOIs: setPOIs,
        setUserPOIs: setUserPOIs,
        setCategories: setCategories,
        setUserCategories: setUserCategories
      }}
    >
      {props.children}
    </PoiContext.Provider>
  );
};

export default PoiContextProvider;