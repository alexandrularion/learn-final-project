import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;

  .jobs_page__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 30px;
    row-gap: 40px;
  }
  .jobs_page__empty_state {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

export default Container;
