"use client";

import { createContext, useContext, ReactNode } from "react";

type ApiContextType = {
  apiUrl: string;
};

const ApiContext = createContext<ApiContextType>({
  apiUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api",
});

export function ApiProvider({ children }: { children: ReactNode }) {
  return (
    <ApiContext.Provider
      value={{
        apiUrl:
          process.env.NEXT_PUBLIC_API_URL ||
          "http://localhost:5000/api",
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}

export function useApi() {
  return useContext(ApiContext);
}