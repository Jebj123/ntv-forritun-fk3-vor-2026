import { createContext } from 'react';

export const STORAGE_KEY = 'lesson14-auth';

export type AuthContextValue = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextValue | null>(null);

export function readStoredSession(): boolean {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
}
