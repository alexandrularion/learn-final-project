import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Button, Heading, TextField } from "./common";
import TwitterIcon from "./assets/twitter.svg?react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Heading>Hello world</Heading>
    <Button variant="fill">Click me</Button>
    <TextField
      iconChildren={<TwitterIcon />}
      isIconVisible={true}
      errorChildren={"Link invalid"}
      isErrorVisible={true}
      onChange={(e) => console.log(e.target.value)}
    />
  </StrictMode>
);
