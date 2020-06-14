import React, { useEffect, useState } from "react";
import { useDispatch, useSelectotr } from "react-redux";
import styled from "styled-components";
import { logIn } from "../redux/action/userAction";

const User = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const handlePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };

    console.log(user);
  };
  return (
    <LoginBox onSubmit={handleLogIn}>
      <div className="input_box">
        <label htmlFor="user_email">이메일</label>
        <input
          type="text"
          placeholder="이메일을 입력해주세요"
          id="user_email"
          value={email}
          onChange={handleEmail}
        />
      </div>
      <div className="input_box">
        <label htmlFor="user_password">비밀번호</label>
        <input
          type="password"
          placeholder="이메일을 입력해주세요"
          id="user_password"
          value={password}
          onChange={handlePassword}
        />
      </div>
      <button type="submit">로그인</button>
      <button
        type="button"
        className="google"
        onClick={() => dispatch(logIn())}
      >
        Sign in With Google
      </button>
    </LoginBox>
  );
};

export default User;

const LoginBox = styled.form`
  max-width: 400px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & > * {
    width: 100%;
  }

  .input_box {
    margin-bottom: 2em;
    label {
      display: block;
      font-size: 1.2em;
      font-weight: 500;
      margin-bottom: 0.8em;
    }
    input {
      display: block;
      width: 100%;
      height: 4em;
      border: 1px solid #eee;
      padding: 1em;
      border-radius: 2px;
    }
  }
  button {
    border: 1px solid #eee;
    height: 3.4em;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1em;
    border-radius: 2px;

    &.google {
      background: orangered;
      border: none;
      color: #fff;
      font-weight: 500;
    }
  }
`;
