import React, { useEffect, useState } from "react";
import { useDispatch, useSelectotr } from "react-redux";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { logIn, googleLogIn } from "../redux/action/userAction";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

const User = ({ history }) => {
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

  const handleLogInForm = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
  };

  const handleLogin = () => {
    dispatch(logIn({ email, password }));
  };
  const handleSignUp = () => {
    history.push("/SignUp");
  };
  const handleGoogle = () => {
    dispatch(googleLogIn());
  };
  return (
    <LoginBox onSubmit={handleLogInForm}>
      <Input type="text" label="이메일" placeholder="이메일을 입력해주세요" id="user_email" value="email" onChange={handleEmail} />
      <Input type="password" label="비밀번호" placeholder="비밀번호를 입력해주세요" id="user_password" value="password" onChange={handlePassword} />
      <Button type="submit" onClick={handleLogin} label="로그인" width="100%" />
      <Button type="button" onClick={handleSignUp} label="회원가입" width="100%" />
      <Button type="button" onClick={handleGoogle} label="Sign in With Google" width="100%" bgColor="orangered" color="#FFF" fontWeight="500" />
    </LoginBox>
  );
};

export default withRouter(User);

const LoginBox = styled.form`
  max-width: 400px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  input {
    margin-bottom: 2em;
    height: 4em;
  }
  button {
    margin-bottom: 0.5em;
    height: 3.4em;
  }
`;
