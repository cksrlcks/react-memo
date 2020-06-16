import "@babel/polyfill";
import React from "react";
import Header from "./components/structure/Header";
import { BrowserRouter as Router } from "react-router-dom";
import store, { history } from "./redux/store";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import Container from "./components/structure/Container";
import styled from "styled-components";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Header />
          <Body className="contents">
            <Container />
          </Body>
        </ConnectedRouter>
      </Provider>
    </Router>
  );
};

export default App;

const Body = styled.div``;
