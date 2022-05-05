import styled from "styled-components";

export const Wrapper = styled.div`
  /* CSS样式（支持嵌套样式） */
  .title {
    margin: 28px 0 8px 0;
    color: #333;
    font-size: 14px;
    font-weight: bold;

    .icon-red {
      display: inline-block;
      height: 14px;
      width: 3px;
      margin-right: 7px;
      background: #c10d0c;
    }
  }

  .brief-desc {
    text-indent: 2em;
  }

  .introduction-list {
    h2 {
      margin: 28px 0 8px 0;
      color: #333;
      font-size: 14px;
      font-weight: bold;
    }
    p {
      line-height: 25px;
      color: #666;
      font-size: 12px;
    }
  }
`;
