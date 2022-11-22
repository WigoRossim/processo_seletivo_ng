import { FieldValues, useForm } from "react-hook-form";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { Container } from "./style";
import { AuthContext } from "../../Contexts/AuthContexts";
import { schemaRegistry } from "../../Validations";
import { yupResolver } from "@hookform/resolvers/yup";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const { userRegister } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    mode: "onChange",
    resolver: yupResolver(schemaRegistry),
  });

  return (
    <Container>
      <button
        className="return_login"
        onClick={() => navigate("/", { replace: false })}
      >
        Voltar
      </button>
      <h1>NG.CA$H</h1>
      <form onSubmit={handleSubmit(userRegister)}>
        <h2>Cadastro</h2>
        <Input
          name="username"
          register={register}
          labelName={"Nome"}
          placeholder={"Digite o seu nome"}
          errors={errors.username?.message}
        />
        <Input
          name="password"
          register={register}
          labelName={"Senha"}
          placeholder={"Digite a sua senha"}
          errors={errors.password?.message}
        />
        <Input
          name="confirmPassword"
          register={register}
          labelName={"Confirmar senha"}
          placeholder={"Confirme a sua senha"}
          errors={errors.confirmPassword?.message}
        />
        <Button
          color="var(--gray-0)"
          backGround="var(--gray-1)"
          colorHover="var(--gray-0)"
          type={"submit"}
        >
          Cadastrar-se
        </Button>
      </form>
    </Container>
  );
};

export default RegistrationPage;
