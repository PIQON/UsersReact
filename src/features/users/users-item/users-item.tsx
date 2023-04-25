export type UserProps = {
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
