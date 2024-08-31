import Container from "./button.styled";

const Button = (props) => {
  return (
    <Container
      form={props.form}
      type={props.type}
      disabled={props.disabled}
      variant={props.variant}
      onClick={props.onClick}
    >
      {props.children}
    </Container>
  );
};

export default Button;
