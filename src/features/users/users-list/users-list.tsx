import { Card } from "../../ui/card/card";
import { useUsersContext } from "../users-context/useUsersContext";
import { UsersItem } from "../users-item/users-item";
import styled from "./users-list.module.css";

export const UsersList = () => {
  const { users } = useUsersContext();
  return (
    <Card additionalClass={styled["users"]}>
      <ul>
        {users.length > 0 ? (
          users.map((user) => <UsersItem key={user.id} {...user} />)
        ) : (
          <p>Users is empty list.</p>
        )}
      </ul>
    </Card>
  );
};
