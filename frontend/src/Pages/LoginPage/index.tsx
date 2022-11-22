import { useState } from "react";
import Button from "../../Components/Button";
import Modal from "../../Components/Modal";
import ModalLogin from "../../Components/Modal/ModalLogin";
import { Container } from "./style";

const LoginPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <Container>
      {isOpenModal && (
        <Modal>
          <ModalLogin setIsOpenModal={setIsOpenModal} />
        </Modal>
      )}
      <div className="box_logo">
        <h1>NG.CA$H</h1>
        <p>A CARTEIRA DA NOVA GERAÇÃO</p>
      </div>
      <Button
        color="var(--gray-0)"
        backGround="var(--gray-1)"
        colorHover="var(--gray-0)"
        width={"65%"}
        onClick={() => setIsOpenModal(true)}
      >
        Login
      </Button>
    </Container>
  );
};

export default LoginPage;
