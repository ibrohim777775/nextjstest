import styled from "styled-components";

export const NewPostStyled = styled.div`
  & .form {
    margin: 25px 10px 10px 0;
    width: 100%;
    min-width: 300px;
    .form__block {
      display: flex;
      flex-direction: column;
      // align-items: center;
      justify-content: space-between;
      margin-bottom: 25px;
      & .error__message {
        color: red;
        margin: 10px 0;
      }
      & label {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 10px;
      }
      & input,
      textarea {
        padding: 10px 15px;
        outline: none;
        border: none;
        box-shadow: 4px 3px 9px 0px #124578;
        border-radius: 12px;
        font-size: 18px;
      }
    }
    & button {
      padding: 10px 25px;
      border-radius: 12px;
      background-color: #124578;
      outline: none;
      border: none;
      color: #fff;
      font-size: 18px;
      cursor: pointer;
      transition: all 0.5s;

      &:hover {
        transform: scale(1.05);
        transition: all 0.5s;
      }
    }
  }
`;
