import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px 0;
  background-color: var(--background-color-2);
  position: sticky;
  bottom: 0;

  .job_footer__alignment {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 730px;

    .alignment__details {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default Container;
