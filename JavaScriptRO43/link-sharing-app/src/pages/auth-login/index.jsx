import PropTypes from "prop-types";
import Container from "./index.styled";

const AuthLoginPage = (props) => {
  return <Container>Our nice template component {props.children}</Container>;
};

AuthLoginPage.propTypes = {
  children: PropTypes.element,
};

export default AuthLoginPage;
