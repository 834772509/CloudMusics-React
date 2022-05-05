import styled from "styled-components";

export const Wrapper = styled.div`
  /* CSS样式（支持嵌套样式） */
  /* width: 70%; */
  width: 980px;
  margin: 0 auto;
  min-height: 100%;
  padding-bottom: 126px;
  box-sizing: border-box;
  background-color: #fff;

  .notfound {
    padding: 125px 0 0;
    text-align: center;

    .icon-404 {
      display: inline-block;
      width: 270px;
      height: 112px;
      background: url(${require("@/assets/img/logo.png")}) no-repeat;
      background-position: 0 -405px;

    }

    .text {
      margin-top: 35px;
      font-size: 18px;
      font-family: "Microsoft Yahei";
    }
  }
`;
