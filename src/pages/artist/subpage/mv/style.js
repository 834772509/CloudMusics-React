import styled from "styled-components";

export const Wrapper = styled.div`
  /* CSS样式（支持嵌套样式） */

  .mv-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;

    .mv-item {
      width: 137px;
      height: 140px;
      margin: 10px 0;

      .image {
        position: relative;
        .msk {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          background-position: 0 -1170px;
        }
        .icon-play {
          position: absolute;
          display: inline-block;
          width: 44px;
          height: 44px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-position: -30px -135px;

          &:hover {
            background-position: -30px -85px;
          }
        }
      }
      .title {
        margin: 8px 0 3px;
        a {
          font-size: 14px;
          color: #000;

          display: inline-block;
          width: 100%;
          /* 强制显示一行文本 */
          white-space: nowrap;
          /* 超出部分隐藏 */
          overflow: hidden;
          /* 设置超出隐藏部分的文本 */
          text-overflow: ellipsis;
        }
      }
    }
  }
`;
