import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--background-color-2);
  border-radius: 6px;
  padding: 34px 43px;
  gap: 40px;

  .job_description__details {
    display: flex;
    gap: 5px;
    flex-direction: column;

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
  .job_description__content {
    display: flex;
    flex-direction: column;
  }
`;

export default Container;
