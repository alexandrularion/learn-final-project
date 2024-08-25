import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  background-color: var(--background-color-2);
  border-radius: 6px;
  gap: 20px;

  .job_card__logo {
    width: 50px;
    height: 50px;
    border-radius: 15px;
    overflow: hidden;
    margin-top: -57px; // 32px + 25px

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .job_card__container {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .job_card__info {
      display: flex;
      align-items: center;
      gap: 5px;
    }
    .job_card__badge {
      padding-top: 20px;
    }
  }
`;

export default Container;
