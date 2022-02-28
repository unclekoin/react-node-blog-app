import { useContext } from 'react';
import { TagIdContext } from '../hoc/tag-id-provider';

export const useTagId = () => {
  return useContext(TagIdContext);
};