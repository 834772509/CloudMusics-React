import styled from "styled-components";

export const Wrapper = styled.div`
  /* CSS样式（支持嵌套样式） */

  width: auto;
  height: 40px;
  border-bottom: 2px solid #c10d0c;
  line-height: 35px;

  display: flex;
  justify-content: space-between;

  .left {
    display: flex;

    .title {
      font-size: 24px;
      font-weight: normal;
      color: #333;
      margin-right: 20px;
    }
    .keyword {
      transform: translateY(10%);
      display: flex;

      .item {
        margin-right: 15px;
        .divider {
          margin-left: 15px;
          color: #ccc;
        }
      }
    }
  }

  .right {
    a {
      margin-top: 14px;
    }
  }
`;
