import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  background-color: var(--background-color-2);
  border-radius: 6px;
  gap: 20px;
  cursor: pointer;
  position: relative;

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
  .job_card__actions {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 15;

    button {
      background: none;
      padding: 5px 10px;
      color: var(--button-text-color-3);

      &:hover {
        background: none;
        color: var(--button-text-color-hover-3);
      }
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
      h4 {
        color: var(--badge-color);
      }
    }
  }
`;

export default Container;
