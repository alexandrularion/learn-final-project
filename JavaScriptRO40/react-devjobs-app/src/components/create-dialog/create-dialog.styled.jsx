import styled from "styled-components";

const Container = styled.div`
  display: flex;

  .create_dialog__overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 30;
  }
  .create_dialog__modal {
    display: flex;
    flex-direction: column;
    gap: 25px;
    background-color: var(--background-color-1);
    border-radius: 6px;
    width: 500px;
    padding: 20px 25px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 35;

    .modal__header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      button {
        background: none;
        padding: 5px 10px;
        color: var(--button-text-color-2);
        &:hover {
          background: none;
          color: var(--button-text-color-hover-2);
        }
      }
    }
    .modal__form {
      display: flex;
      flex-direction: column;
      gap: 15px;

      .form__input,
      .form__textarea {
        height: 48px;
        width: 100%;
        border: none;
        border-radius: 8px;
        padding: 0 10px;
        background-color: var(--background-color-2);
        color: var(--text-color);
        font-size: var(--text-font-size);
        font-weight: var(--text-font-weight);
        &::placeholder {
          font-size: var(--heading-font-size-4);
        }
      }
      .form__textarea {
        min-height: 100px;
        padding: 10px;
        margin-top: 20px;
      }
      .form__radios {
        display: flex;
        gap: 20px;
        margin-top: 20px;

        .radios__container {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;

          input {
            width: 20px;
            height: 20px;
            outline: none;
            border: none;
            background: var(--background-color-2);
          }
          label {
            color: var(--text-color);
            font-size: var(--text-font-size);
            font-weight: var(--text-font-weight);
          }
        }
      }
    }
    .modal__footer {
      display: flex;
      justify-content: end;
    }
  }
`;

export default Container;
