import styled from "styled-components";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--background-color-1);
  min-height: 100vh;

  .app_layout__alignment {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1110px;
    position: relative;
    top: -40px;
    /* -40px = 80px (nav) / 2 */
  }
`;

export default Container;
