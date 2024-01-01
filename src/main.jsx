import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { WindowResponsive } from "@/components/WindowResponsive.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <WindowResponsive>
        <App />
      </WindowResponsive>
    </HashRouter>
  </React.StrictMode>
);
