import React from "react";
import ReactDOM from "react-dom/client";
// import { Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./Context/authContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
