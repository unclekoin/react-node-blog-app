import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState('');

  const changeQuery = (tagId) => {
    setQuery(tagId)
  };

  const value = { query, changeQuery };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export default SearchProvider;
