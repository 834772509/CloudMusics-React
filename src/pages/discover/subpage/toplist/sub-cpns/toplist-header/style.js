import styled from "styled-components";

export const Wrapper = styled.div`
  /* CSS样式（支持嵌套样式） */
  background: #fff;

  .header {
    display: flex;
    padding: 40px;

    .image {
      width: 150px;
      height: 150px;
      margin-right: 22px;
      border: 1px solid #ccc;
    }

    .info {
      margin: 16px 0 4px;

      .title {
        line-height: 24px;
        font-size: 20px;
        font-weight: normal;
      }

      .update-time {
        margin: 0 0 20px;
        line-height: 35px;

        .icon-time {
          display: inline-block;
          width: 13px;
          height: 13px;
          background-position: -18px -682px;
          margin: 9px 5px -3px 3px;
        }
      }
    }
  }
`;
