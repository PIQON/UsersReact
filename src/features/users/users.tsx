import { useUsersContext } from "./users-context/useUsersContext";
import { UsersItem } from "./users-item/users-item";

export const Users = () => {
  const { users } = useUsersContext();
  console.log(users);
  return (
    <div>
      <UsersItem username="Max" age={30} />
    </div>
  );
};
