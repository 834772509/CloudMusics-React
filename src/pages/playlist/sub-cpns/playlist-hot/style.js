import styled from "styled-components";

export const Wrapper = styled.div`
  /* CSS样式（支持嵌套样式） */
  .list {
    display: flex;
    margin-bottom: 15px;
    width: 200px;

    .info {
      margin-left: 10px;
      line-height: 24px;
      .title {
        width: 140px;
        /* 强制显示一行文本 */
        white-space: nowrap;
        /* 超出部分隐藏 */
        overflow: hidden;
        /* 设置超出隐藏部分的文本 */
        text-overflow: ellipsis;
        a {
          color: #000;
        }
      }

      .author-info {
        .by {
          color: #999;
        }
        .author {
          color: #666;
        }
      }
    }
  }
`;
