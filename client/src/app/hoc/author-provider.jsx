import React, { createContext, useState } from 'react';

export const AuthorContext = createContext();

const AuthorProvider = ({ children }) => {
  const [currentAuthorId, setCurrentAuthorId] = useState(null);

  const setAuthor = (authorId) => {
    setCurrentAuthorId(authorId)
  };

  const value = { currentAuthorId, setAuthor };

  return (
    <AuthorContext.Provider value={value}>{children}</AuthorContext.Provider>
  );
};

export default AuthorProvider;
