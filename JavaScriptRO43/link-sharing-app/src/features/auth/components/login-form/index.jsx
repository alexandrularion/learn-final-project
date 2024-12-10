import PropTypes from "prop-types";
import Container from "./index.styled";

const LoginForm = (props) => {
  return <Container>Our nice template component {props.children}</Container>;
};

LoginForm.propTypes = {
  children: PropTypes.element,
};

export default LoginForm;
