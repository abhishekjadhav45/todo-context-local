import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"; // small reset only

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
