import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./components/App/App";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter basename="/news-explorer-frontend">
        <App />
      </BrowserRouter>
    </StrictMode>
  );
} else {
  console.error("Root element not found.");
}
