// AuthContext.tsx
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { IAuth, ILogin } from "../interface";
import { authorize, login, register } from "../service/api/auth";

interface AuthContextType {
  isAuthenticated: boolean;
  onLoginHandler: (formInput: any) => Promise<void>;
  onRegisterHandler: (formInput: any) => Promise<void>;
  loader: boolean,
  setLoader: React.Dispatch<React.SetStateAction<boolean>>;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loader, setLoader] = useState(false);


  useEffect(() => {
    setLoader(true);
    authorize()
      .then((res) => {
        setIsAuthenticated(true);
        setLoader(false);
      })
      .catch(() => {
        setLoader(false);
        setIsAuthenticated(false);
      });
  }, []);


  const onLoginHandler = async (formInput: ILogin) => {
    try {
      await login(formInput);
      setIsAuthenticated(true);
    } catch (e) {
      console.log(e);
    }
  };

  const onRegisterHandler = async (formInput: IAuth) => {
    try {
      await register(formInput);
      setIsAuthenticated(true);
    } catch (e) {
      console.log(e);
    }
  };


  return (
    <AuthContext.Provider
      value={{ isAuthenticated, onLoginHandler, onRegisterHandler, loader, setLoader, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
