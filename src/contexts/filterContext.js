import React, { useState, createContext, useEffect, useRef } from "react";

export const FilterContext = createContext(null);

const FilterContextProvider = (props) => {

  const [poiFilter, setPoiFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [contributorFilter, setContributorFilter] = useState("");

  const categoryCount = categoryFilter.length;

  const displayedPOIs = (pois) => {
    const filteredPOIs = pois
      .filter(poi => {
        return poi.name.toLowerCase().search(poiFilter.toLowerCase()) !== -1 ||
               poi.description.toLowerCase().search(poiFilter.toLowerCase()) !== -1;
      })
      .filter(poi => {
        return poi.contributor.fullName.search(contributorFilter) !== -1;
      });

      let catFiltered = []

      if (categoryCount > 0) {

        for (let poi of filteredPOIs) {
          let included = 0;
          for (let cat of categoryFilter) {
            for (let poiCat of poi.categories) {
              if (poiCat.name === cat) {
                included++;
              }
            }            
          }
          if (included === categoryFilter.length) {
            catFiltered.push(poi);
          }
        }
      } else {
        catFiltered = [...filteredPOIs];
      }
    return catFiltered;
  }

  const handleChange = (type, value) => {
    if (type === 'name') {
      setPoiFilter(value) 
    } else if (type === 'category') {
      setCategoryFilter(value);
    } else {
      setContributorFilter(value);
    }
  };


  return (
    <FilterContext.Provider
      value={{
        displayedPOIs: displayedPOIs,
        handleChange: handleChange
      }}
    >
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
