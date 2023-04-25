import { forwardRef } from "react";

type InputType = React.HTMLInputTypeAttribute | undefined;

type FormElementProps = {
  id: string;
  title: string;
  type: InputType;
};

export const FormElement = forwardRef<HTMLInputElement, FormElementProps>(
  ({ id, title, ...rest }, ref) => {
    return (
      <div>
        <label htmlFor={id}>{title}</label>
        <input id={id} ref={ref} {...rest} />
      </div>
    );
  }
);
