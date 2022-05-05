import styled from "styled-components";

export const Wrapper = styled.div`
  /* CSS样式（支持嵌套样式） */

  .category-item {
    border-bottom: 1px solid #d3d3d3;
    margin: 5px 0 0;
    padding-top: 16px;
    margin-left: 16px;
    .title {
      height: 25px;
      font-size: 16px;
      font-weight: bold;
    }
    .artist-list {
      width: 160px;
      line-height: 29px;
      .icon-subger {
        display: inline-block;
        width: 4px;
        height: 4px;
        background-position: -13px -43px;
      }
      .title-sub {
        margin-left: 10px;
      }
    }
  }
`;
