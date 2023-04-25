export type UserProps = {
  id: string;
  username: string;
  age: number;
};

export const UsersItem = ({ username, age }: UserProps) => {
  return (
    <li>
      {username} ({age} years old)
    </li>
  );
};
