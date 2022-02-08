import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthoProvider } from "./Context/AuthProvider";

ReactDOM.render(
  <React.StrictMode>
    <AuthoProvider>
      <App />
    </AuthoProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
