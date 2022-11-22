import { MdClose } from "react-icons/md";
import { FieldValues, useForm } from "react-hook-form";
import Input from "../../Input";
import Button from "../../Button/index";
import { Container } from "./style";
import { Dispatch, SetStateAction, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthContexts";

interface IModalProps {
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
}

const ModalLogin = ({ setIsOpenModal }: IModalProps) => {
  const { userLogin } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({ mode: "onChange" });
  const navigate = useNavigate();
  return (
    <Container>
      <button className="button_close" onClick={() => setIsOpenModal(false)}>
        <MdClose size={20} />
      </button>
      <form onSubmit={handleSubmit(userLogin)}>
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
        <Button
          color="var(--gray-1)"
          backGround="var(--gray-0)"
          colorHover="var(--gray-1)"
          type="submit"
        >
          Entrar
        </Button>
      </form>

      <p>
        Não possui conta?
        <span onClick={() => navigate("/register", { replace: false })}>
          Cadastre-se
        </span>
      </p>
    </Container>
  );
};

export default ModalLogin;
