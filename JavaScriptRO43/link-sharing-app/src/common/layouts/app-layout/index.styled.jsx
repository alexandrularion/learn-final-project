import styled from "styled-components";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  background-color: var(--background-color-1);
  gap: 24px;
  padding: 24px;
  width: 100%;
  min-height: 100vh;

  .container__layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;

    .layout__preview {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--background-color-2);
      border-radius: 12px;
    }
    .layout__content {
      display: flex;
      flex-direction: column;
      background-color: var(--background-color-2);
      border-radius: 12px;
    }
  }
`;

export default Container;
