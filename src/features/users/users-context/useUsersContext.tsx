import { useContext } from "react";
import { UsersContext } from "./users-context";

export const useUsersContext = () => {
  const currentUserContext = useContext(UsersContext);

  if (!currentUserContext) {
    throw new Error(
      "useCurrentUser has to be used within <CurrentUserContext.Provider>"
    );
  }

  return currentUserContext;
};
