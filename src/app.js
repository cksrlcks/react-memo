import "@babel/polyfill";
import React from "react";
import Header from "./components/structure/Header";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import Container from "./components/structure/Container";
import styled from "styled-components";

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Body className="contents">
          <Container />
        </Body>
      </Provider>
    </Router>
  );
};

export default App;

const Body = styled.div``;
