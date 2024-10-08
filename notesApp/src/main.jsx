import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter.jsx";
import "./Styles/main.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>,
);
