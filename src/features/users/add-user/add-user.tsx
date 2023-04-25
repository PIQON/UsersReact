import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "../../ui/button/button";
import { Card } from "../../ui/card/card";
import { FormElement } from "../../ui/form-element/form-element";
import styled from "./add-user.module.css";
import { AddUserSchema } from "./add-user-schema";
import { UserProps } from "../users-item/users-item";
import { useUsersContext } from "../users-context/useUsersContext";

export const AddUser = () => {
  const { addUser } = useUsersContext();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserProps>({
    resolver: yupResolver(AddUserSchema),
  });

  const formSubmit = (formData: UserProps) => {
    addUser(formData);
    reset();
  };

  return (
    <Card additionalClass={styled["input"]}>
      <form onSubmit={handleSubmit(formSubmit)}>
        <FormElement
          id="username"
          type="text"
          title="Username"
          error={errors.username?.message}
          {...register("username")}
        />
        <FormElement
          id="age"
          type="number"
          title="Age (Years)"
          error={errors.age?.message}
          {...register("age")}
        />
        <Button title="Add User" type="submit" />
      </form>
    </Card>
  );
};
