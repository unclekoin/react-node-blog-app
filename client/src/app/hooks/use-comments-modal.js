import { useContext } from 'react';
import { CommentsModalContext } from '../hoc/comments-modal-provider';

export const useCommentsModal = () => {
  return useContext(CommentsModalContext);
};