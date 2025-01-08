import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./App";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";

// Initialize AOS globally
AOS.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
