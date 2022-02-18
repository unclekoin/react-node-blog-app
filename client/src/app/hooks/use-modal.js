import { useContext } from 'react';
import { ModalContext } from '../hoc/modal-provider';

export const useModal = () => {
  return useContext(ModalContext);
};