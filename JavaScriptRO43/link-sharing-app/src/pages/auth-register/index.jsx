import PropTypes from "prop-types";
import Container from "./index.styled";

const AuthRegisterPage = (props) => {
  return <Container>Our nice template component {props.children}</Container>;
};

AuthRegisterPage.propTypes = {
  children: PropTypes.element,
};

export default AuthRegisterPage;
