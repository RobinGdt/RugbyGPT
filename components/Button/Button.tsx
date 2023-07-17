import React from "react";
import { FC, SVGProps } from "react";
import styled from "styled-components";

interface ButtonProps {
  color: "black" | "white" | "blue";
  isSubmitBtn?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  text: string;
  outlined?: boolean;
  width?: string;
  Icon?: FC<SVGProps<SVGSVGElement>>;
  className?: string;
}

const Wrapper = styled.button<{
  width: string;
  fontColor: string;
  color: string;
  loading: boolean;
}>`
  width: ${(props) => props.width};
  height: 50px;
  display: flex;
  padding: 0 8px;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.fontColor};
  gap: 8px;
  background-color: ${(props) => props.color};
  border-radius: 4px;
  border: none;
  transition: background-color 0.1s ease-out;
  outline: none;
  cursor: pointer;
  @font-face {
    font-family: "WebbEllisCup";
    src: url("WebbEllisCup.ttf");
  }

  &:hover {
    background-color: ${(props) => props.color}-hover;
  }
  &:disabled {
    background-color: ${(props) => (props.loading ? `${props.color}` : "grey")};
    color: ${(props) => props.fontColor};
    cursor: unset;
  }
`;

const StyledIcon = styled.svg<{ width: number }>`
  min-width: ${(props) => props.width}px;
`;

const StyledOutlinedButton = styled(Wrapper)`
  background-color: "white";
  color: ${(props) => props.fontColor};
  border: 1px solid ${(props) => props.color};
  &:hover {
    background-color: ${(props) => props.color};
  }
  &:disabled {
    background-color: "white";
    color: ${(props) => props.fontColor};
    border: ${(props) =>
      props.loading ? ` 1px solid ${props.color}` : "1px solid grey"};
  }
`;

const Button = ({
  text,
  onClick,
  color,
  disabled,
  width = "100%",
  className,
  Icon,
  isSubmitBtn = false,
  outlined = false,
}: ButtonProps) => {
  const getFontColor = (): string => {
    if (!outlined) return !disabled ? "white" : "grey";
    return disabled ? "grey" : `${color}`;
  };

  return (
    <Wrapper
      type={isSubmitBtn ? "submit" : "button"}
      onClick={onClick}
      disabled={disabled}
      width={width}
      color={color}
      fontColor={getFontColor()}
      loading={true}
      as={undefined}
      className={className}
    >
      {Icon && (
        <StyledIcon
          as={Icon}
          width={20}
          height={20}
          fill={getFontColor()}
          stroke={getFontColor()}
        />
      )}
      {<h3>{text}</h3>}
    </Wrapper>
  );
};

export default Button;
