import React, { createContext, useState } from 'react';

export const CommentsModalContext = createContext();

const CommentsModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCommentsWindow = () => {
    setIsOpen((prevState) => !prevState);
  };

  const value = { isOpen, toggleCommentsWindow };

  return (
    <CommentsModalContext.Provider value={value}>
      {children}
    </CommentsModalContext.Provider>
  );
};

export default CommentsModalProvider;
