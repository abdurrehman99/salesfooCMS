import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./redux/store";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  spacing: 0,
  palette: {
    primary: { main: "#082E52" },
    secondary: { main: "#7a7a7a" },
  },
  typography: {
    fontFamily: "Montserrat-Bold",
    color: "black",
    fontSize: 14,
  },
  shape: {
    borderRadius: 25,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.register();
