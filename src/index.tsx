import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HomeSmartphone } from "./screens/HomeSmartphone";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <HomeSmartphone />
  </StrictMode>,
);
