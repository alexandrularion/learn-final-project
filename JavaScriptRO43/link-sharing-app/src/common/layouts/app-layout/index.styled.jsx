import styled from "styled-components";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  background-color: var(--background-color-1);
  gap: 24px;
  padding: 24px;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .container__layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    height: calc(100vh - 150px);

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
      overflow-y: auto;
    }
  }
`;

export default Container;
