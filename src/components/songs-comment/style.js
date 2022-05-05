import styled from "styled-components";

export const Wrapper = styled.div`
  /* CSS样式（支持嵌套样式） */
  padding: 15px 0;
  border-top: 1px dotted #ccc;
  display: flex;

  .image {
  }

  .info {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;

    .comment-box {
      width: 100%;
      overflow: hidden;
      line-height: 20px;

      a {
        color: #0c73c2;
      }
    }
    .bottom {
      display: flex;
      justify-content: space-between;

      .left {
        .date {
          color: #999;
        }
      }
      .right {
        .zan {
          display: inline-block;
          width: 15px;
          height: 14px;
          background-position: -150px 0;
          margin-right: 5px;
        }
        .sep {
          margin: 0 8px;
          color: #ccc;
        }
      }
    }
  }
`;
