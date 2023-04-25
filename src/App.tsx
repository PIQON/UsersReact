import { AddUser } from "./features/users/add-user/add-user";
import { Users } from "./features/users/users";

export const App = () => {
  return (
    <>
      <AddUser />
      <Users />
    </>
  );
};
