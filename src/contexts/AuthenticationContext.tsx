import React, { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { User } from "src/types/interfaces";
import { QueryKey } from "src/types/enums";
import { getUsers } from "src/services/network/api";

export type AuthenticationContextStateType = {
  user: User | null;
};

const AuthenticationContext = createContext<AuthenticationContextStateType>({
  user: null,
});

export function useAuthentication(): AuthenticationContextStateType {
  return useContext(AuthenticationContext);
}

export function AuthenticationContextProvider({ children }: { children: React.ReactNode }) {
  const { data: user = null } = useQuery<User>([QueryKey.GET_USER], async () => {
    const response = await getUsers();
    return response.data[0];
  });

  return <AuthenticationContext.Provider value={{ user }}>{children}</AuthenticationContext.Provider>;
}
