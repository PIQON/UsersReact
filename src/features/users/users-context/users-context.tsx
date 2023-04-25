import { createContext, useState } from "react";
import { RootChildren } from "../../../types/shared";
import { UserProps } from "../users-item/users-item";

type UsersContextStore = {
  users: UserProps[];
  addUser: (user: UserProps) => void;
};

export const UsersContext = createContext<UsersContextStore | null>(null);

export const UsersContextProvider = ({ children }: RootChildren) => {
  const [users, setUsers] = useState<UserProps[]>([]);

  const addUser = (user: UserProps) => {
    setUsers([...users, { ...user, id: Math.random().toString() }]);
  };

  return (
    <UsersContext.Provider value={{ users, addUser }}>
      {children}
    </UsersContext.Provider>
  );
};
