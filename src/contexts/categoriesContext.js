import React, { useEffect, useState, useReducer, createContext, useContext } from "react";
import { getCategories } from "../api/poi-api";

export const CategoriesContext = createContext(null);

const CategoriesContextProvider = (props) => {


  const [categories, setCategories] = useState([]);
  const [catUser, setCatUser] = useState(null);
  const [userCustomCats, setUserCustomCats] = useState([]);
  const [userCategories, setUserCategories] = useState([]);

  useEffect(() => {
    if (catUser) getUserCustomCats(catUser);
    console.log(categories);
  }, [catUser]);

  const getAllCategories = async (user) => {
    const cats = await getCategories();
    setCategories(cats);
    setCatUser(user);
  };

  const getUserCustomCats = (user) => {
    const uCats = categories.filter(cat => cat.contributor === user._id);
    console.log(uCats);
    setUserCustomCats (uCats);
  };


  return (
    <CategoriesContext.Provider
      value={{
        categories: categories,
        userCustomCats: userCustomCats,
        getAllCategories: getAllCategories,
        getUserCustomCats: getUserCustomCats
      }}
    >
      {props.children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesContextProvider;