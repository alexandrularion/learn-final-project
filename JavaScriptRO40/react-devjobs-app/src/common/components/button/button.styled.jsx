import styled from "styled-components";

const Container = styled.button`
  display: flex;
  align-items: center;
  width: max-content;
  height: 48px;
  padding: 0 39px;
  border-radius: 5px;
  font-size: var(--text-font-size);
  line-height: var(--text-line-height);
  font-weight: var(--button-font-weight);
  outline: none;
  appearance: none;
  border: none;
  transition: 0.2s all ease-in-out;
  background-color: ${(props) => {
    switch (props.variant) {
      case "filled":
        return "var(--button-background-color-1)";
      case "shaded":
        return "var(--button-background-color-2)";
      default:
        return "var(--button-background-color-1)";
    }
  }};
  color: ${(props) => {
    switch (props.variant) {
      case "filled":
        return "var(--button-text-color-1)";
      case "shaded":
        return "var(--button-text-color-2)";
      default:
        return "var(--button-text-color-1)";
    }
  }};

  &:hover {
    background-color: ${(props) => {
      switch (props.variant) {
        case "filled":
          return "var(--button-background-hover-color-1)";
        case "shaded":
          return "var(--button-background-hover-color-2)";
        default:
          return "var(--button-background-hover-color-1)";
      }
    }};
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export default Container;
