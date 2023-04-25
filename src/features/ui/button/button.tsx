import styled from "./button.module.css";

type ButtonType = "button" | "submit" | "reset" | undefined;

type ButtonProps = {
  title: string;
  type: ButtonType;
  onClick?: () => void;
};

export const Button = ({ title, ...rest }: ButtonProps) => {
  return (
    <button className={styled["button"]} {...rest}>
      {title}
    </button>
  );
};
