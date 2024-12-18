import PropTypes from "prop-types";
import Container from "./index.styled";

const Button = (props) => {
  return (
    <Container variant={props.variant} {...props}>
      {props.children}
    </Container>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  variant: PropTypes.oneOf(["fill", "outline"]),
};

export default Button;
