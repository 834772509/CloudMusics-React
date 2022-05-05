import styled from "styled-components";

export const Wrapper = styled.div`
  /* CSS样式（支持嵌套样式） */
  display: flex;
  justify-content: center;

  .left {
    width: 240px;
    border: 1px solid #d3d3d3;
  }

  .right {
    width: 740px;
    padding-bottom: 50px;
    border: 1px solid #d3d3d3;
  }
`;
