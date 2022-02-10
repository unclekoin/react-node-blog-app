import { useContext } from 'react';
import { AuthContext } from '../hoc/auth-provider';

export const useAuth = () => {
  return useContext(AuthContext);
};
