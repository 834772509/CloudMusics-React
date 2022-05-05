import styled from "styled-components";

export const Wrapper = styled.div`
  /* CSS样式（支持嵌套样式） */

  .content {
    width: 220px;
    margin: 0 auto;
    padding: 30px 0 43px;

    .iphone-number {
      .select-before {
        .ant-select-selector {
          min-width: 100%;
        }
      }
    }

    .message {
      line-height: 18px;
      color: #e33232;
      margin-top: 5px;
      font-size: 12px;

      .icon-info {
        display: inline-block;
        width: 14px;
        height: 14px;
        background-position: -50px -270px;
        vertical-align: middle;
        margin-right: 8px;
      }
    }

    .password {
      margin-top: 10px;
    }

    .option {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
    }

    .button {
      margin-top: 20px;
    }
  }
  .footer {
    display: flex;
    justify-content: space-between;
    font-size: 12px;

    .btn-otherlogin {
      color: #0c72c3;
    }
    .btn-regiser {
      color: #999;
    }
  }
`;
