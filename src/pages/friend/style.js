import styled from "styled-components";

export const Wrapper = styled.div`
  /* CSS样式（支持嵌套样式） */
  width: 980px;
  min-height: 700px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;

  .login {
    background: url(${require("assets/img/friend-notlogin.jpg")}) no-repeat;
    background-position: 0 0;
    width: 902px;
    height: 414px;
    padding-top: 70px;
    margin: 0 auto;
    transform: translateY(10%);

    .btn-login {
      background: url(${require("assets/img/friend-notlogin.jpg")}) no-repeat;

      display: block;
      width: 157px;
      height: 48px;
      margin: 190px 0 0 535px;
      background-position: 0 9999px;
      text-indent: -9999px;

      &:hover {
        background-position: 0 -430px;
      }
    }
  }
`;
