import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRouter from "src/AppRouter";
import { AuthenticationContextProvider } from "src/contexts/AuthenticationContext";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthenticationContextProvider>
        <AppRouter />
      </AuthenticationContextProvider>
    </QueryClientProvider>
  );
}

export default App;
