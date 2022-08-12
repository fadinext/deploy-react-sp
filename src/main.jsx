import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import HelloWorld from "./containers/HelloWorld";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/hello" element={<HelloWorld />}></Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
