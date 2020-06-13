import React from "react";
import Header from "./layout/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { store, rrfProps } from "./store";
import { Provider } from "react-redux";
import Container from "./Layout/Container";
import styled from "styled-components";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <Header />
          <Body className="contents">
            <Container />
          </Body>
        </ReactReduxFirebaseProvider>
      </Provider>
    </Router>
  );
};

export default App;

const Body = styled.div``;
