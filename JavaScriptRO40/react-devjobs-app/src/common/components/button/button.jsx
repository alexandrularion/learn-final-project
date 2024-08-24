import Container from "./button.styled";

const Button = (props) => {
  return <Container variant={props.variant}>{props.children}</Container>;
};

export default Button;
