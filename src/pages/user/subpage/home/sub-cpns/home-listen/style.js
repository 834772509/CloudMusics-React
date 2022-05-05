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

  .song-list {
    border: 1px solid #e2e2e2;
    /* 隔行变色 */

    & .song-item:nth-of-type(even) {
      background-color: #f7f7f7;
    }

    .song-item {
      display: flex;

      &:hover {
        background-color: #eeeeee;
        .song {
          display: flex;

          .ttc {
            width: 100%;
            margin-right: -90px;
          }
          .operate {
            display: inline-block;
          }
        }
      }

      .hd {
        width: 72px;
        height: 38px;

        .num {
          display: inline-block;
          padding-left: 5px;
          padding-right: 8px;
          width: 37px;
          text-align: right;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 16px;
          color: #666;
        }
        .icon-play {
          display: inline-block;
          /* margin-top: 10px; */
          width: 17px;
          height: 17px;
          cursor: pointer;
          background-position: 0 -103px;
        }
      }
      .song {
        padding-left: 10px;
        width: 480px;
        height: 38px;

        .ttc {
          .title {
            font-weight: bold;
            color: #333;
            line-height: 38px;
          }

          .artist {
            color: #aeaeae;
          }
        }

        .operate {
          display: flex;
          align-items: center;
          display: none;
          height: 18px;
          transform: translateY(50%);
          .btn {
            width: 18px;
            height: 16px;
            margin-left: 5px;
            cursor: pointer;
          }

          .addto {
            width: 13px;
            height: 13px;
            vertical-align: top;
            background-position: 0 -700px;
          }

          .favor {
            /* margin: 2px 0 0 4px; */
            background-position: 0 -174px;
          }

          .share {
            background-position: 0 -195px;
          }
          .down {
            background-position: -81px -174px;
          }
        }
      }
      .tops {
        width: 319px;
        height: 38px;

        .top-progress {
          height: 38px;
          display: inline-block;
          background-color: #4eb4f5;
          opacity: 0.1;
        }
      }
    }
  }
  .more {
    height: 32px;
    line-height: 32px;
    text-align: right;
    a {
      color: #666;
    }
  }
`;
