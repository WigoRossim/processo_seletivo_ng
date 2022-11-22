import { ButtonHTMLAttributes, ReactNode } from "react";
import ButtonStyle from "./style";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
  backGround?: string;
  colorHover?: string;
  height?: string | number;
  width?: string | number;
  children: ReactNode;
}

const Button = ({
  color,
  backGround,
  colorHover,
  height,
  width,
  children,
  ...rest
}: IButtonProps) => {
  return (
    <ButtonStyle
      color={color}
      backGround={backGround}
      colorHover={colorHover}
      height={height}
      width={width}
      {...rest}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;
