import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../../pages/Home";
import Notes from "../../pages/Notes";
import User from "../../pages/User";
import Write from "../../pages/Write";
import styled from "styled-components";
const Container = () => {
  return (
    <>
      <ContainerBox>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/notes" component={Notes} />
          <Route path="/User" component={User} />
          <Route path="/Write" component={Write} />
        </Switch>
      </ContainerBox>
    </>
  );
};
export default Container;

const ContainerBox = styled.div`
  width: 100%;
  height: 100%;
`;
