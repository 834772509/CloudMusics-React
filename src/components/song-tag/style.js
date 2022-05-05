import styled from "styled-components";

export const Wrapper = styled.div`
  /* CSS样式（支持嵌套样式） */
  display: inline-block;
  .tag {
    margin: 0px 10px 3px 0;
    background-position: 0 0;
    text-align: center;
    color: #333;

    .icon-end {
      height: 22px;
      font-style: normal;
      display: inline-block;
      padding: 0 3px 0 13px;
      background-position: right -27px;
    }
  }
`;
