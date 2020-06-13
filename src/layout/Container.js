import React from "react";
import { Route, Switch } from "react-router-dom";
import Left from "./Left";
import Home from "../component/Home";
import Notes from "../component/Notes";
import Todos from "../component/Todos";
import Write from "../component/Write";
import NotePage from "../component/NotePage";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useFirebase, isLoaded, isEmpty } from "react-redux-firebase";
const Container = () => {
  const auth = useSelector((state) => state.firebase.auth);

  function AuthIsLoaded({ children }) {
    const auth = useSelector((state) => state.firebase.auth);
    if (!isLoaded(auth)) return <div>splash screen...</div>;
    return children;
  }

  return (
    <AuthIsLoaded>
      {auth.isEmpty ? (
        <LoginRequestBox>로그인이 필요합니다.</LoginRequestBox>
      ) : (
        <>
          <Left />
          <ContainerBox className="right">
            <Switch>
              <Route exact path="/" component={Home} />
              <Switch>
                <Route exact path="/notes" component={Notes} />
                <Route path="/notes/:id" component={NotePage} />
                <Route path="/write" component={Write} />
              </Switch>
              <Route path="/todos" component={Todos} />
            </Switch>
          </ContainerBox>
        </>
      )}
    </AuthIsLoaded>
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
