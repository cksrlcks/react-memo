import React from "react";
import styled from "styled-components";

const ButtonItem = styled.button`
  padding: 0.6em 1em;
  border: 1px solid #eee;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  font-weight: ${(props) => props.fontweight};
  transition: all 0.2s;
  &:hover {
    border-color: #1890ff;
    color: #1890ff;
  }
  &.none {
    border: none;
    &:hover {
      border-color: none;
      color: ${(props) => props.color};
    }
  }
  &:focus {
    outline: none;
  }
`;

const Button = (props) => {
  const { label, type, onClick, width, color, bgColor, fontWeight, hover } = props;

  return (
    <ButtonItem
      type={type}
      onClick={onClick}
      width={width}
      color={color}
      bgColor={bgColor}
      className={hover}
    >
      {label}
    </ButtonItem>
  );
};

export default Button;
