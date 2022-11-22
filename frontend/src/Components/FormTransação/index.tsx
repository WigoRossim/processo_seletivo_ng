import Input from "../Input";
import { FieldValues, useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContexts";
import Button from "../Button";
import { Container } from "./style";

const FormTransacao = () => {
  const { trasactionCreate } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({ mode: "onChange" });

  return (
    <Container onSubmit={handleSubmit(trasactionCreate)}>
      <h2>Transação</h2>
      <Input
        name="username"
        register={register}
        labelName={"Name"}
        placeholder={"Digite o nome do destinatário"}
        errors={errors.username?.message}
      />
      <Input
        name="value"
        register={register}
        labelName={"Valor"}
        placeholder={"Digite o valor da transferencia"}
        errors={errors.value?.message}
      />
      <Button
        color="var(--gray-1)"
        backGround="var(--gray-0)"
        colorHover="var(--gray-1)"
        type="submit"
      >
        Transferir
      </Button>
    </Container>
  );
};

export default FormTransacao;
