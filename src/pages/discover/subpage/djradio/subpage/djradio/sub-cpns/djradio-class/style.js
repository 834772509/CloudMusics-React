import styled from "styled-components";

export const Wrapper = styled.div`
  /* CSS样式（支持嵌套样式） */

  .class-list {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 20px;

    .class-item {
      width: 435px;
      height: 140px;
      display: flex;
      margin-bottom: 20px;

      &:nth-child(-n + 2) {
        border-bottom: 1px solid #e7e7e7;
        /* background-color: pink; */
      }

      .image {
        width: 120px;
        height: 120px;
      }

      .info {
        margin-left: 20px;

        .title {
          margin: 16px 0 20px;
          font-size: 18px;
          color: #333;
          font-weight: bold;
        }

        .rcmdtext {
          color: #999;
        }
      }
    }
  }
`;
