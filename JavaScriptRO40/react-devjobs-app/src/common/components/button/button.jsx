import Container from "./button.styled";

const Button = (props) => {
  return (
    <Container disabled={props.disabled} variant={props.variant}>
      {props.children}
    </Container>
  );
};

export default Button;
