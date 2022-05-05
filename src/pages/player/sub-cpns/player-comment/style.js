import styled from "styled-components";

export const Wrapper = styled.div`
  /* CSS样式（支持嵌套样式） */
  margin-top: 40px;

  .comment-title {
    height: 33px;
    border-bottom: 2px solid #c20c0c;

    h3 {
      display: inline-block;
      font-size: 20px;
      line-height: 28px;
    }
    .comment-count {
      color: #666;
      margin: 9px 0 0 20px;
    }
  }

  .comment-input {
    margin-top: 20px;
    display: flex;

    .head {
      width: 50px;
      height: 50px;
    }

    .input {
      width: 100%;

      margin-left: 7px;
      .textarea {
        width: 100%;
        height: 50px;
        resize: none;
        background: #fff;
        padding: 5px 6px 6px;
        border: 1px solid #cdcdcd;
        border-radius: 2px;
      }

      .buttons {
        display: flex;
        justify-content: space-between;
        .left {
          .icon-expression {
            display: inline-block;
            width: 18px;
            height: 18px;
            background-position: -40px -490px;
            margin: 0px 10px 0 0;
            cursor: pointer;
          }
          .icon-at {
            display: inline-block;
            width: 18px;
            height: 18px;
            background-position: -60px -490px;
            margin: 0px 10px 0 0;
            cursor: pointer;
          }
        }
        .right {
          .button-comment {
            width: 46px;
            height: 25px;
            background-position: -84px -64px;
            color: #fff;
            text-align: center;
            line-height: 25px;
            &:hover {
              background-position: -84px -94px;
            }
          }
        }
      }
    }
  }

  .hot-comment-title {
    color: #333;
    height: 20px;
    border-bottom: 1px solid #cfcfcf;
    font-weight: bold;
  }
`;
