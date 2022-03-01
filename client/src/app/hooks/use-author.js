import { useContext } from 'react';
import { AuthorContext } from '../hoc/author-provider';

export const useAuthor = () => {
  return useContext(AuthorContext);
};