import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

export const QueryClientTestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const testQueryClient = createTestQueryClient();
  return <QueryClientProvider client={testQueryClient}>{children}</QueryClientProvider>;
};
