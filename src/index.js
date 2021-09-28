import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Divider } from "@material-ui/core";

import "@fontsource/roboto-mono";

import Helloer from "./components/Helloer";
import store from "./store";

const app = (
  <Provider store={store}>
    <Helloer emoji="🌎" name="World" />
    <Divider />
    <Helloer.Connected />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
