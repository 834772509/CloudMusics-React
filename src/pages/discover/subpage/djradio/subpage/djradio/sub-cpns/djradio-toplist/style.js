import styled from "styled-components";

export const Wrapper = styled.div`
  /* CSS样式（支持嵌套样式） */
  width: 426px;

  .program-list {
    border: 1px solid #e2e2e2;
    border-top: none;

    /* 前三个元素序号标红 */
    .program-item:nth-child(-n + 3) {
      .num {
        color: red !important;
      }
    }
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

    .rank {
      width: 47px;
      margin: 6px 0 0 0;
      text-align: center;
      line-height: normal;

      .num {
        /* color: #da4545; */
        color: #999;
        font-size: 14px;
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
      width: 190px;
      font-size: 12px;
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
  .progress {
    width: 100px;
    height: 8px;
    margin-top: 10px;
  }
`;
