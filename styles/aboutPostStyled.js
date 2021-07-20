import styled from "styled-components";

export const StyledAboutPost = styled.div`
  & p {
    overflow-wrap: break-word;
  }
  & .post__title {
    margin: 15px 0;
  }
  & .options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & button {
      outline: none;
      border: none;
      border-radius: 12px;
      padding: 10px 15px;
      // background-color: #124578;
      // box-shadow: 4px 3px 9px 0px #124578;
      color: #fff;
      cursor: pointer;
      font-weight: 600;
      margin-right: 25px;
      transition: all 1s;

      &:hover {
        transform: scale(1.05);
        transition: all 0.5s;
      }
    }
    & .delete {
      background-color: red;
    }
    & .edit {
      background-color: green;
    }
  }
`;
