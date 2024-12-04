import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Button, Heading } from "./common";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Heading>Hello world</Heading>
    <Button variant="fill">Click me</Button>
  </StrictMode>
);
