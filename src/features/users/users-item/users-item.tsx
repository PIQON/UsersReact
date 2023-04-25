type UserProps = {
  name: string;
  age: number;
};

export const UsersItem = ({ name, age }: UserProps) => {
  return (
    <li>
      {name} ({age} years old)
    </li>
  );
};
