import { ReactNode } from "react";
import { Container } from "./style";

interface IModalProps {
  children: ReactNode;
}

const Modal = ({ children }: IModalProps) => {
  return <Container>{children}</Container>;
};

export default Modal;
