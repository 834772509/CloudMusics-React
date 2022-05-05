import styled from "styled-components";

export const Wrapper = styled.div`
  /* CSS样式（支持嵌套样式） */
  .header {
    height: 33px;
    border-bottom: 2px solid #c20c0c;
    font-size: 12px;
    color: #333;
    h2 {
      font-weight: normal;
      font-size: 20px;
      line-height: 28px;
    }
  }

  .playlist-list {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */

    .playlist-item {
      margin-right: 20px;
    }
  }
`;
