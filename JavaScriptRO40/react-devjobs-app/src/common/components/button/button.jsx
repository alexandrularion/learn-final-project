import Container from "./button.styled";

const Button = (props) => {
  return (
    <Container
      form={props.form}
      onClick={props.onClick}
      type={props.type}
      disabled={props.disabled}
      variant={props.variant}
    >
      {props.children}
    </Container>
  );
};

export default Button;
