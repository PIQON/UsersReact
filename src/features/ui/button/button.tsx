type ButtonType = "button" | "submit" | "reset" | undefined;

type ButtonProps = {
  title: string;
  type: ButtonType;
  onClick: () => void;
};

export const Button = ({ title, ...rest }: ButtonProps) => {
  return <button {...rest}>{title}</button>;
};
