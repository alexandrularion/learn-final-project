import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  border-radius: 6px;
  padding: 0 16px;
  gap: 30px;
  background-color: var(--background-color-2);

  .search__hr {
    height: 100%;
    border-color: var(--text-color);
    opacity: 0.2;
  }
  #search_form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    .search__input {
      display: flex;
      align-items: center;
      height: 100%;
      gap: 16px;
    }
    .search__input--1,
    .search__input--2 {
      input {
        height: 100%;
        background: none;
        border: none;
        outline: none;
        appearance: none;
        font-size: var(--text-font-size);
        color: var(--heading-color);

        &::placeholder {
          color: var(--heading-color);
          opacity: 0.5;
        }
      }
    }
    .search__input--3 {
      input {
        width: 24px;
        height: 24px;
        background: var(--checkbox-background-color);
        border: none;
        outline: none;
        border-radius: 3px;
      }
      label {
        font-size: var(--text-size);
        font-weight: 700;
        color: var(--heading-color);
      }
    }
  }
`;

export default Container;
