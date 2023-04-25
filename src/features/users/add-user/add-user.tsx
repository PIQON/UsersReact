import { Button } from "../../ui/button/button";
import { FormElement } from "../../ui/form-element/form-element";

export const AddUser = () => {
  return (
    <form>
      <FormElement id="username" type="text" title="Username" />
      <FormElement id="age" type="text" title="Age (Years)" />
      <Button title="Add User" type="submit" />
    </form>
  );
};
