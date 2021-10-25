import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Box, colors, createTheme, Divider } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

import "@fontsource/roboto-mono";

import Helloer from "./components/Helloer";
import store from "./store";

const theme = createTheme({
  typography: {
    fontFamily: ['"Roboto Mono"', "Open Sans"].join(",")
  },
  palette: {
    primary: {
      main: colors.green[500]
    },
    secondary: {
      main: colors.pink[300]
    }
  }
});

const app = (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Box>
        <Helloer emoji="🌎" name="World" />
        <Divider />
        <Helloer.Connected />
      </Box>
    </Provider>
  </ThemeProvider>
);

ReactDOM.render(app, document.getElementById("root"));
