import React from "react";
import styled from "styled-components";

const InputItem = styled.div`
  width: 100%;
  label {
    display: block;
    font-size: 1.2em;
    font-weight: 500;
    margin-bottom: 0.8em;
  }
  input {
    display: block;
    width: 100%;
    border: 1px solid #eee;
    padding: 1em;
    border-radius: 2px;
  }
`;

const Input = (props) => {
  const { id, label, type, placeholder, onChange, width, fontColor, bgColor } = props;

  return (
    <InputItem width={width} fontColor={fontColor}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} onChange={onChange} />
    </InputItem>
  );
};

export default Input;
