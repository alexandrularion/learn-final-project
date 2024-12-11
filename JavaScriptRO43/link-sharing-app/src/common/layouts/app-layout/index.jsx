import PropTypes from "prop-types";
import Container from "./index.styled";
import { Navigation } from "../../components";

const AppLayout = (props) => {
  return (
    <Container>
      <Navigation />
      <div className="container__layout">
        <div className="layout__preview">{/* Preview Links Component */}</div>
        <div className="layout__content">{props.children}</div>
      </div>
    </Container>
  );
};

AppLayout.propTypes = {
  children: PropTypes.element,
};

export default AppLayout;
