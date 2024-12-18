import styled from "styled-components";

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1 1;
  background-color: var(--background-color-1);
  border-radius: 12px;
  padding: 20px;
  min-height: 100%;

  img {
    object-fit: contain;
    width: 250px;
    height: auto;
  }
  header {
    align-items: center;

    p {
      width: 100%;
      max-width: 488px;
      text-align: center;
    }
  }
`;

export default Container;
