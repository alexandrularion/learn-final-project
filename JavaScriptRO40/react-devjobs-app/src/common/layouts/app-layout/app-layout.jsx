import Navigation from "../../components/navigation/navigation";
import Container from "./app-layout.styled";

const AppLayout = (props) => {
  return (
    <Container>
      <Navigation />
      {props.children}
    </Container>
  );
};

export default AppLayout;
