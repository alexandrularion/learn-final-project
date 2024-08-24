import styled from "styled-components";

const Container = styled.h1`
  font-weight: var(--heading-font-weight);
  color: var(--heading-color);
  font-size: ${(props) => {
    switch (props.size) {
      case "xl":
        return "var(--heading-font-size-1)";
      case "lg":
        return "var(--heading-font-size-2)";
      case "md":
        return "var(--heading-font-size-3)";
      case "sm":
        return "var(--heading-font-size-4)";
      default:
        return "var(--heading-font-size-1)";
    }
  }};
  line-height: ${(props) => {
    switch (props.size) {
      case "xl":
        return "var(--heading-line-height-1)";
      case "lg":
        return "var(--heading-line-height-2)";
      case "md":
        return "var(--heading-line-height-3)";
      case "sm":
        return "var(--heading-line-height-4)";
      default:
        return "var(--heading-line-height-1)";
    }
  }};
`;

export default Container;
