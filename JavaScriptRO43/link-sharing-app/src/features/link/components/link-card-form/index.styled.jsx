import styled from "styled-components";

const Container = styled.form`
  display: flex;
  flex-direction: column;
  background-color: var(--background-color-1);
  border-radius: 12px;
  padding: 20px;
  gap: 12px;
  height: max-content;
  width: 100%;

  .container__header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header__btn {
      border: none;
      outline: none;
      appearance: none;
      background: none;
      font-family: "Instrument Sans", sans-serif;
      font-size: var(--heading-size-2);
      font-weight: var(--heading-weight-2);
      line-height: var(--heading-line-2);
      color: var(--text-color);
      cursor: pointer;

      &:disabled {
        opacity: 0.7;
        pointer-events: none;
      }
    }
  }
`;

export default Container;
