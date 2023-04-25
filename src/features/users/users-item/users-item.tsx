export type UserProps = {
  id: string;
  username: string;
  age: number;
};

export const UsersItem = ({ username, age }: UserProps) => {
  return (
    <li>
      <span>{username}</span> ({age} years old)
    </li>
  );
};
