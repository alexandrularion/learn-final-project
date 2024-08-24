import Container from "./heading.styled";

const Heading = (props) => {
  return (
    <Container as={props.as} size={props.size}>
      {props.children}
    </Container>
  );
};

export default Heading;
