import Input from "../Input";
import { FieldValues, useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { AuthContext, IUserData } from "../../Contexts/AuthContexts";
import Button from "../Button";
import { Container } from "./style";
import api from "../../Services/api";
import toast from "react-hot-toast";

const FormTransacao = () => {
  const { user } = useContext(AuthContext);
  const [listUsers, setListUsers] = useState<IUserData[]>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({ mode: "onChange" });

  useEffect(() => {
    api
      .get("/users/all")
      .then((response) => {
        setListUsers(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const trasactionCreate = (data: FieldValues) => {
    const { username, value } = data;

    const findUser = listUsers?.find((user) => user.username === username);

    const newData = {
      value,
      debitedAccountId: user?.accounts.id,
      creditedAccountId: findUser?.accounts.id,
    };

    const postAPI = () => {
      const response = api.post("/transactions", newData).then((response) => {
        return response;
      });
      return response;
    };
    toast.promise(postAPI(), {
      loading: "Loading",
      success: "Transferencia realizada",
      error: "Algo deu errado, verifique o nome do destinatario ou seu cash",
    });
  };

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
