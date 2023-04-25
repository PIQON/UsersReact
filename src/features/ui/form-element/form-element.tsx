type InputType = React.HTMLInputTypeAttribute | undefined;

type FormElementProps = {
  id: string;
  title: string;
  type: InputType;
};

export const FormElement = ({ id, title, ...rest }: FormElementProps) => {
  return (
    <div>
      <label htmlFor={id}>{title}</label>
      <input name={id} id={id} {...rest} />
    </div>
  );
};
