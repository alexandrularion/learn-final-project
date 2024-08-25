import Navigation from "../../components/navigation/navigation";
import Container from "./app-layout.styled";

// HOC (Higher Order Component)

const AppLayout = (props) => {
  // We can have a common logic for all the pages that use the component

  return (
    <Container>
      <Navigation />
      {props.children}
    </Container>
  );
};

export default AppLayout;
