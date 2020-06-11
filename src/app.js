import React from "react";
import Header from "./layout/Header";
import Left from "./layout/Left";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import Home from "./component/Home";
import Notes from "./component/Notes";
import Todos from "./component/Todos";
import NotePage from "./component/NotePage";

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Body className="contents">
          <Left />
          <Container className="right">
            <Switch>
              <Route exact path="/" component={Home} />
              <Switch>
                <Route exact path="/notes" component={Notes} />
                <Route path="/notes/:id" component={NotePage} />
              </Switch>
              <Route path="/todos" component={Todos} />
            </Switch>
          </Container>
        </Body>
      </Provider>
    </Router>
  );
};

export default App;

const Body = styled.div``;

const Container = styled.div``;
