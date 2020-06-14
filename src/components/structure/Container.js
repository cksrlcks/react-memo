import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../../pages/Home";
import Notes from "../../pages/Notes";
import styled from "styled-components";
import { useSelector } from "react-redux";
const Container = () => {
  const { loading, loggedIn, user } = useSelector((state) => state.user);

  return (
    <>
      {!loggedIn ? (
        <LoginRequestBox>로그인이 필요합니다.</LoginRequestBox>
      ) : (
        <ContainerBox className="right">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/notes" component={Notes} />
          </Switch>
        </ContainerBox>
      )}
    </>
  );
};
export default Container;

const ContainerBox = styled.div``;
const LoginRequestBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
