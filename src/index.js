import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/App.css";
import App from "./App";
import "react-mde/lib/styles/css/react-mde-all.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
