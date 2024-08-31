import Navigation from "../../components/navigation/navigation";
import Container from "./app-layout.styled";

const AppLayout = (props) => {
  // We can have a common logic for all the pages that use the component
  return (
    <Container>
      <Navigation />
      <div className="app_layout__alignment">{props.children}</div>
    </Container>
  );
};

export default AppLayout;
