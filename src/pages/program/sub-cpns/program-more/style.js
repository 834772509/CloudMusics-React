import styled from "styled-components";

export const Wrapper = styled.div`
  /* CSS样式（支持嵌套样式） */

  .list {
    .item {
      display: flex;
      width: 200px;
      height: 50px;
      margin-bottom: 15px;

      .info {
        margin-left: 10px;

        .title {
          a {
            display: inline-block;
            width: 140px;
            color: #000;
          }
        }
        .serialNum {
          color: #999;
        }
      }
    }
  }
`;
