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
    background: url(${require("assets/img/mymusic.png")}) no-repeat;
    background-position: 0 0;
    width: 807px;
    height: 268px;
    padding-top: 104px;
    margin: 0 auto;
    transform: translateY(50%);

    .btn-login {
      background: url(${require("assets/img/mymusic.png")}) no-repeat;

      display: block;
      width: 167px;
      height: 45px;
      margin: 98px 0 0 482px;
      background-position: 0 9999px;
      text-indent: -9999px;

      &:hover {
        /* background: pink; */
        background-position: 0 -278px;
      }
    }
  }
`;
