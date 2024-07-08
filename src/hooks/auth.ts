import { AuthContext, AuthUser } from "@/providers/auth";
import { useContext } from "react";

export function useAuth(): AuthUser {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}