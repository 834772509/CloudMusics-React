import styled from "styled-components";

export const Wrapper = styled.div`
  /* CSS样式（支持嵌套样式） */
  display: flex;
  padding: 40px 0 39px;

  .left {
    width: 300px;
    padding: 0 35px 3px 40px;
    border-right: 1px dotted #ccc;

    .image {
      margin-bottom: 15px;
    }

    .terms {
      font-size: 10px;
      color: rgba(0, 0, 0, 0.4);
      margin-top: 15px;

      a {
        color: #507daf;
      }
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    padding: 3px 0 3px 39px;
    margin-top: -15px;

    a {
      font-size: 12px;
      color: #333;
      line-height: 38px;
      margin-top: 15px;
    }

    i[class^="icon"] {
      display: inline-block;
      width: 38px;
      height: 38px;
      margin-right: 14px;
      vertical-align: top;
    }

    .icon-wechat {
      background-position: -150px -670px;
    }

    .icon-qq {
      background-position: -190px -670px;
    }

    .icon-weibo {
      background-position: -231px -670px;
    }
    .icon-netEase-mail {
      background-position: -271px -670px;
    }
  }
`;
