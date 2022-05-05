import styled from "styled-components";

export const Wrapper = styled.div`
  /* CSS样式（支持嵌套样式） */

  .header {
    height: 40px;
    border-bottom: 2px solid #c20c0c;
    h3 {
      font-size: 24px;
      font-weight: normal;
    }
  }

  .excellent-list {
    margin: 16px 0 0 0;
    display: flex;
    justify-content: space-between;

    .excellent-item {
      width: 150px;

      .title {
        margin: 13px 0 6px;
        line-height: 16px;
        font-size: 14px;
        font-weight: normal;

        /* 强制显示一行文本 */
        white-space: nowrap;
        /* 超出部分隐藏 */
        overflow: hidden;
        /* 设置超出隐藏部分的文本 */
        text-overflow: ellipsis;
      }

      .rcmdtext {
        color: #999;
      }
    }
  }
`;
