import styled from "styled-components";

export const Wrapper = styled.div`
  /* CSS样式（支持嵌套样式） */
  width: 140px;
  height: 188px;
  margin-bottom: 30px;
  margin-right: 30px;

  .cover {
    position: relative;

    .link {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      display: inline-block;
      width: 100%;
      height: 100%;

      background-position: 0 0;
    }

    .bottom {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 27px;
      display: flex;
      justify-content: space-between;
      background-position: 0 -537px;
      color: #ccc;
      line-height: 27px;

      .left {
        .icon-listener {
          display: inline-block;
          width: 14px;
          height: 11px;
          background-position: 0 -24px;
          margin: 9px 5px 0 10px;
        }
      }
      .right {
        .icon-play {
          display: inline-block;
          width: 16px;
          height: 17px;
          background-position: 0 0;
          margin: 6px 5px 0 10px;
        }
      }
    }
  }

  .title {
    color: #000;
    margin: 8px 0 3px;
    /* 强制显示一行文本 */
    white-space: nowrap;
    /* 超出部分隐藏 */
    overflow: hidden;
    /* 设置超出隐藏部分的文本 */
    text-overflow: ellipsis;
  }

  .user-title {
    .by {
      color: #999;
    }
    a {
      color: #666;
    }
  }
`;
