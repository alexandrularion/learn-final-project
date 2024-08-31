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
    z-index: 1;
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
    z-index: 10;
    transform: translate(-50%, -50%);

    .modal__header {
      display: flex;
      justify-content: space-between;

      button {
        background: none;
        outline: none;
        appearance: none;
        border: none;
        font-weight: var(--button-font-weight);
        color: var(--button-text-color-2);
        font-size: var(--text-font-size);
        padding: 5px 10px;
        cursor: pointer;
        transition: 0.2s all ease-in-out;

        &:hover {
          color: var(--button-text-color-hover-2);
        }
      }
    }
    .modal__content {
      display: flex;
      flex-direction: column;
      gap: 15px;

      .content__text,
      textarea {
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
      textarea {
        height: 100px;
        padding: 10px;
        margin-top: 20px;
      }
      .content__radios {
        display: flex;
        gap: 20px;
        margin-top: 20px;

        .radios__group {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;

          input {
            width: 20px;
            height: 20px;
            outline: none;
            border: none;
            background-color: var(--background-color-2);
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
      justify-content: flex-end;
    }
  }
`;

export default Container;
