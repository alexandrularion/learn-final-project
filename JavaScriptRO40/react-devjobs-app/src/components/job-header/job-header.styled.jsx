import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 140px;
  width: 100%;
  background-color: var(--background-color-2);
  border-radius: 6px;
  overflow: hidden;

  .job_header__avatar {
    min-width: 140px;
    width: 140px;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .job_header__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 30px;

    .content__details {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  }
`;

export default Container;
