import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--background-color-2);
  border-radius: 6px;
  padding: 48px 43px;
  gap: 34px;

  .job_content__details {
    display: flex;
    flex-direction: column;
    gap: 5px;

    .details__quick {
      display: flex;
      align-items: center;
      gap: 5px;
    }
    .details__badge {
      h4 {
        color: var(--badge-color);
      }
    }
  }
  .job_content__description {
    display: flex;
    flex-direction: column;
  }
`;

export default Container;
