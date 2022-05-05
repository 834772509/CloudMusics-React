import styled from "styled-components";

export const Wrapper = styled.div`
  /* CSS样式（支持嵌套样式） */
  width: 426px;

  .program-list {
    border: 1px solid #e2e2e2;
    border-top: none;
  }

  .program-item {
    display: flex;
    width: 424px;
    height: 60px;
    padding-top: 10px;

    /* 隔行变色 */
    &:nth-of-type(even) {
      background: #f7f7f7;
    }

    &:hover {
      background: #eeeeee;

      & .image .icon-play {
        display: inline-block;
      }
    }

    .image {
      position: relative;
      margin-left: 20px;

      .icon-play {
        display: none;
        width: 22px;
        height: 22px;
        background-position: 0 -85px;
        position: absolute;
        top: 20%;
        left: 25%;
      }
    }

    .info {
      width: 254px;
      margin: 1px 0 0 10px;

      .title {
        /* 强制显示一行文本 */
        white-space: nowrap;
        /* 超出部分隐藏 */
        overflow: hidden;
        /* 设置超出隐藏部分的文本 */
        text-overflow: ellipsis;
        font-size: 12px;
      }

      .sub-title a {
        color: #999;
      }
    }

    .tag {
      margin: 1px 0 0 10px;
      padding: 0 6px;
      display: inline-block;
      height: 16px;
      line-height: 16px;
      border: 1px solid #999;
      color: #999;
      font-size: 12px;
      vertical-align: middle;
    }
  }
`;
