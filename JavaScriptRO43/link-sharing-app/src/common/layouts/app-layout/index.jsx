import PropTypes from "prop-types";
import Container from "./index.styled";
import { Navigation, PreviewCard } from "../../components";

const AppLayout = (props) => {
  return (
    <Container>
      <Navigation />
      <div className="container__layout">
        <div className="layout__preview">
          <PreviewCard links={props.links} />
        </div>
        <div className="layout__content">{props.children}</div>
      </div>
    </Container>
  );
};

AppLayout.propTypes = {
  children: PropTypes.element,
  links: PropTypes.arrayOf(PropTypes.object),
};

export default AppLayout;
