import { useContext } from 'react';
import { AuthContext, AuthContextType } from '../contexts/Auth';

export function useAuth(): AuthContextType {
  const value = useContext(AuthContext);

  return value;
}
