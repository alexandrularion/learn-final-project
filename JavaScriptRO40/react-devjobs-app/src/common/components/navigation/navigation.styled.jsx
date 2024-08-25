import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 162px;
  width: 100%;
  background-image: url("/navigation_background.jpg");
  border-bottom-left-radius: 100px;

  .navigation__alignment {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1110px;

    .navigation__logo {
      width: 115px;

      img {
        width: 100%;
        object-fit: contain;
      }
    }
  }
`;

export default Container;
