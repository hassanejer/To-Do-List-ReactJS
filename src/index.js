import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

const getElement = document.getElementById("root");
const root = createRoot(getElement);

root.render(
  <>
    <App />
  </>
);
