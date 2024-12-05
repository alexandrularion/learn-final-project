import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Button, DropdownField, Heading, TextField } from "./common";
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
    <DropdownField
      iconChildren={<TwitterIcon />}
      isIconVisible={true}
      options={[
        { id: 1, value: 10, name: "Option 1" },
        { id: 2, value: 11, name: "Option 2" },
        { id: 3, value: 12, name: "Option 3" },
      ]}
      onChange={(e) => console.log(e.target.value)}
    />
  </StrictMode>
);
