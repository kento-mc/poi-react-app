import React, { useEffect, useReducer, createContext } from "react";
import { getUser, getPois, getCategories } from "../api/poi-api";

export const PoiContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load-from-local":
      return JSON.parse(localStorage.getItem('poi-state'));
    case "load-all-pois":
      return { 
        // poiUser: {...state.user},
        pois: [...action.payload.pois],
        userPOIs: [...state.userPOIs],
        categories: [...state.categories],
        userCustomCats: [...state.userCustomCats]
      };
    case "load-user-pois":
      return { 
        // poiUser: {...state.user},
        pois: [...state.pois],
        userPOIs: [...action.payload.uPOIs],
        categories: [...state.categories],
        userCustomCats: [...state.userCustomCats]
      };
    case "load-categories":
      return { 
        // poiUser: {...state.user},
        pois: [...state.pois],
        userPOIs: [...state.userPOIs],
        categories: [...action.payload.cats],
        userCustomCats: [...state.userCustomCats]
      };
    case "load-custom-cats":
      return { 
        // poiUser: {...state.user},
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

  const initialState = localStorage.getItem('poi-state')
    ? JSON.parse(localStorage.getItem('poi-state'))
    : { 
        pois: [],
        userPOIs: [],
        categories: [],
        userCustomCats: []
      };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('poi-state', JSON.stringify(state));
  })

  const setPoiData = async (user) => {
    if (JSON.parse(localStorage.getItem('poi-state')).pois.length === 0 ) {
      const { pois, cats } = await getPoiData(user);
      setPOIs(pois);
      setCategories(cats);
      setUserPOIs(user, pois);
      setUserCategories(user, cats);
    } else {
      console.log('Loading from local...')
      setFromLocalStorage();
    }
  };

  const getPoiData = async (user) => {

    const rawPOIs = await getPois();
    const rawCats = await getCategories();
    console.log('API cat data from PoiContext:');
    console.log(rawCats);
    const populatedPOIs = [];

    for (let rawPOI of rawPOIs) {
      const cats = [];
      const poiUser = await getUser(rawPOI.contributor);
      for (let catId of rawPOI.categories) {
        const cat = rawCats.filter((cat) => cat._id === catId);
        cats.push(cat[0]);
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

    return {pois: populatedPOIs, cats: rawCats};
  };

  const setFromLocalStorage = () => {
    dispatch({ type: "load-from-local", payload: JSON.parse(localStorage.getItem('poi-state'))});
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

  return (
    <PoiContext.Provider
      value={{
        pois: state.pois,
        userPOIs: state.userPOIs,
        categories: state.categories,
        userCustomCats: state.userCustomCats,
        setPoiData: setPoiData,
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