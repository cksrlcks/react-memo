import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../../pages/Home";
import Notes from "../../pages/Notes";
import User from "../../pages/User";
import Write from "../../pages/Write";
import SignUp from "../../pages/SignUp";
import styled from "styled-components";
import Loader from "react-loader-spinner";
import { useSelector } from "react-redux";

const Container = () => {
  const { loading } = useSelector((state) => state.user);
  return (
    <>
      <ContainerBox>
        {loading ? (
          <Loader type="Oval" color="#00BFFF" height={80} width={80} className="loader" />
        ) : (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/notes" component={Notes} />
            <Route path="/User" component={User} />
            <Route path="/Write" component={Write} />
            <Route path="/SignUp" component={SignUp} />
          </Switch>
        )}
      </ContainerBox>
    </>
  );
};
export default Container;

const ContainerBox = styled.div`
  width: 100%;
  height: 100%;
  .loader {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
