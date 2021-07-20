import styled from "styled-components";

export const StyledMain = styled.div`
  min-height: 100vh;
  table,
  tr,
  th,
  td {
    border: 1px solid #000;
  }
  table {
    border-collapse: collapse;
  }
  & .posts {
    display: flex;
    flex-wrap: wrap;
    column-gap: 5%;

    & .post__items {
      width: 30%;
      max-height: 250px;
      margin-bottom: 25px;
      border-radius: 12px;
      box-shadow: 4px 3px 9px 0px #124578;
      padding: 15px;
      overflow: hidden;
      // text-overflow: ellipsis;
      .post__inners {
        height: 100%;
      }
      & .post__title {
        font-size: 22px;
      }
      & .post__body {
        height: 78%;
        margin-top: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        // white-space: nowrap;
        // margin-bottom: 5px;
        font-size: 16px;
      }
    }
  }
`;
