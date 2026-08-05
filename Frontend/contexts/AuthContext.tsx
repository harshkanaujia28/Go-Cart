"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type User = {
  _id?: string;
  name?: string;
  email?: string;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (token: string, password: string) => Promise<void>;
  verifyOtp: (userId: string, otp: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user] = useState<User | null>(null);
  const [loading] = useState(false);

  const forgotPassword = async (email: string) => {
    // Backend API call
  };

  const resetPassword = async (
    token: string,
    password: string
  ) => {
    // Backend API call
  };

  const verifyOtp = async (
    userId: string,
    otp: string
  ) => {
    // Backend API call
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        forgotPassword,
        resetPassword,
        verifyOtp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context)
    throw new Error("useAuth must be used inside AuthProvider");

  return context;
}