import PropTypes from "prop-types";
import Container from "./index.styled";

const RegisterForm = (props) => {
  return <Container>Our nice template component {props.children}</Container>;
};

RegisterForm.propTypes = {
  children: PropTypes.element,
};

export default RegisterForm;
