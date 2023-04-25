import * as yup from "yup";

export const AddUserSchema = yup.object({
  username: yup
    .string()
    .typeError("Username must be a string!")
    .required("Username is required!"),
  age: yup
    .number()
    .typeError("Age must be a number!")
    .required("Age is required!")
    .positive("Age must be positive number!")
    .integer("Age must be a integer!"),
});
