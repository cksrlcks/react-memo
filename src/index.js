import "react-app-polyfill/ie9"; // For IE 9-11 support
import React from "react";
import ReactDOM from "react-dom";
import App from "./app.js";
import "./css/reset.css";
import "./css/layout.scss";

ReactDOM.render(<App />, document.getElementById("app"));
