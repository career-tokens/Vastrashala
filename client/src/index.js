import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./state";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./theme";
import { StytchProvider } from "@stytch/react";
import { StytchUIClient } from "@stytch/vanilla-js";
import TokenAuthenticator from "./scenes/login/TokenAuthenticator";


const stytch = new StytchUIClient(process.env.REACT_APP_STYTCH_PUBLIC_TOKEN);//for login service

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
        <StytchProvider stytch={stytch}>
      <TokenAuthenticator>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
      </Provider>
      </TokenAuthenticator>
      </StytchProvider>
  </React.StrictMode>
);