import "core-js/stable";
import "regenerator-runtime/runtime";
import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import App from "./app.js";
import "./css/reset.css";
import "./css/layout.scss";

ReactDOM.render(<App />, document.getElementById("app"));
