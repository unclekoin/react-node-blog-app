import React, { createContext, useState } from 'react';

export const TagIdContext = createContext();

const TagIdProvider = ({ children }) => {
  const [currentTagId, setCurrentTagId] = useState(null);

  const setTagId = (tagId) => {
    setCurrentTagId(tagId)
  };

  const value = { currentTagId, setTagId };

  return (
    <TagIdContext.Provider value={value}>{children}</TagIdContext.Provider>
  );
};

export default TagIdProvider;
