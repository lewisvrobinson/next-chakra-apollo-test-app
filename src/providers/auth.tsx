'use client';

import { createContext } from 'react';

export type AuthUser = User | null;

export const AuthContext = createContext<AuthUser>(null);

export function AuthProvider({
  user,
  children,
}: {
  user: AuthUser;
  children: React.ReactNode;
}) {
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
