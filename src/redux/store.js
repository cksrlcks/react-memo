import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import rootReducer from "./reducer/index";
import rootSaga from "./saga";

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const enhancers = compose(
  applyMiddleware(sagaMiddleware, routerMiddleware(history)),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
);

const store = createStore(rootReducer(history), enhancers);

sagaMiddleware.run(rootSaga);

export default store;
