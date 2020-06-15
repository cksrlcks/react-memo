import React, { useEffect, useState } from "react";
import { useDispatch, useSelectotr } from "react-redux";
import styled from "styled-components";
import { logIn, signUp } from "../redux/action/userAction";

const User = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const dispatch = useDispatch();

  const checkEmail = (email) => {
    const regex = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return email != "" && email != "undefined" && regex.test(email);
  };
  const handleEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const handlePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const handlePasswordCheck = (e) => {
    const passwordCheck = e.target.value;
    setPasswordCheck(passwordCheck);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };

    if (passwordCheck !== userData.password) {
      return alert("비밀번호를 다시한번 확인해주세요");
    }

    if (!checkEmail(userData.email)) {
      return alert("이메일주소가 정확하지 않습니다. 다시한번 확인해주세요");
    }

    console.log(userData);
  };

  useEffect(() => {}, [passwordCheck]);

  return (
    <LoginBox onSubmit={handleSignIn}>
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
          placeholder="비밀번호를 입력해주세요"
          id="user_password"
          value={password}
          onChange={handlePassword}
        />
      </div>
      <div className="input_box">
        <label htmlFor="user_password_check">비밀번호 확인</label>
        <input
          type="password"
          placeholder="비밀번호를 다시한번 입력해주세요"
          id="user_password_check"
          value={passwordCheck}
          onChange={handlePasswordCheck}
        />
      </div>
      <button
        type="submit"
        onClick={() => dispatch(signUp({ email, password }))}
      >
        회원가입
      </button>
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
