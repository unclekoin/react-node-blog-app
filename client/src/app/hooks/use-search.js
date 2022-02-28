import { useContext } from 'react';
import { SearchContext } from '../hoc/search-provider';

export const useSearch = () => {
  return useContext(SearchContext);
};