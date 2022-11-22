import styled from "styled-components";
import { IButtonProps } from "./";

type IButtonStyleProps = Omit<IButtonProps, "children">;

const ButtonStyle = styled.button<IButtonStyleProps>`
  height: ${(props) => props.height || "40px"};
  width: ${(props) => props.width || "90%"};
  max-width: 150px;
  transition: 0.5s;
  color: ${({ color }) => color};

  font-size: 20px;
  font-weight: 600;
  border: 1px solid ${({ color }) => color};
  border-radius: 8px;
  background-color: ${({ backGround }) => backGround};
  transition: 0.3s;

  &:hover {
    background-color: ${({ colorHover }) => colorHover};
    color: ${({ backGround }) => backGround};
    transition: 0.3s;
  }
`;

export default ButtonStyle;
