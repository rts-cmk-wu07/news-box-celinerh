import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Inbox from "./pages/Inbox";
import Archive from "./pages/Archive";
import Settings from "./pages/Settings";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Inbox />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
