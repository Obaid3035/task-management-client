// AuthContext.tsx
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { IAuth, ILogin } from "../interface";
import { login, register } from "../service/api/auth";

interface AuthContextType {
  isAuthenticated: boolean;
  onLoginHandler: (formInput: any) => Promise<void>;
  onRegisterHandler: (formInput: any) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authToken = document.cookie.includes('authToken');
    setIsAuthenticated(authToken);
  }, []);

  const onLoginHandler = async (formInput: ILogin) => {
    try {
      await login(formInput)
      setIsAuthenticated(true);
    } catch (e) {
      console.log(e);
    }
  };

  const onRegisterHandler = async (formInput: IAuth) => {
    try {
      await register(formInput)
      setIsAuthenticated(true);
    } catch (e) {
      console.log(e);
    }
  }

  const logout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, onLoginHandler, onRegisterHandler }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
