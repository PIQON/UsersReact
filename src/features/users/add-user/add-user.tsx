import { Button } from "../../ui/button/button";
import { Card } from "../../ui/card/card";
import { FormElement } from "../../ui/form-element/form-element";
import styled from "./add-user.module.css";

export const AddUser = () => {
  return (
    <Card additionalClass={styled["input"]}>
      <form>
        <FormElement id="username" type="text" title="Username" />
        <FormElement id="age" type="text" title="Age (Years)" />
        <Button title="Add User" type="submit" />
      </form>
    </Card>
  );
};
