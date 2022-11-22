import { InputHTMLAttributes } from "react";
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseFormRegister,
} from "react-hook-form";
import { BoxInput } from "./style";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  register: UseFormRegister<FieldValues>;
  labelName: string;
  errors?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
}

const Input: React.FC<IInputProps> = ({
  name,
  labelName,
  errors,
  register,
  ...rest
}) => {
  return (
    <BoxInput>
      <label htmlFor={labelName}>{labelName}</label>
      <input id={labelName} {...register(name)} {...rest} />
      {!!errors && <span> {typeof errors === "string" && errors}</span>}
    </BoxInput>
  );
};

export default Input;
