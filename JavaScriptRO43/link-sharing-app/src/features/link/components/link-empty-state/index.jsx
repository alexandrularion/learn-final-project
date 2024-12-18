import Container from "./index.styled";
import { Header } from "../../../../common";

const LinkEmptyState = () => {
  return (
    <Container>
      <img alt="Link emtpy state" src="/assets/link-empty-state.png" />
      <Header
        headingLabel={"Let’s get you started"}
        textLabel={
          "Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!"
        }
      />
    </Container>
  );
};

LinkEmptyState.propTypes = {};

export default LinkEmptyState;
