import styled from "styled-components";

export const Wrapper = styled.div`
  /* CSS样式（支持嵌套样式） */
  .header {
    margin-top: 20px;

    display: flex;
    justify-content: space-between;

    .operate {
      display: flex;
      .play {
        display: flex;
        align-items: center;
        margin-right: 5px;

        .play-icon {
          display: inline-block;
          height: 31px;
          line-height: 31px;
          background-position: right -428px;

          .play {
            color: #fff;
            display: flex;
            align-items: center;
            padding: 0 7px 0 8px;
            /* padding: 0 0 0 8px; */
            background-position: 0 -387px;

            &:hover {
              background-position: 0 -469px;

              & i {
                background-position: -28px -1622px;
              }
            }

            i {
              display: inline-block;
              width: 20px;
              height: 18px;
              margin: -2px 2px 0;
              background-position: 0 -1622px;
            }
          }
        }
        .add-icon {
          display: inline-block;
          width: 31px;
          height: 31px;
          margin-left: -3px;
          padding-right: 0;
          background-position: 0 -1588px;
          text-indent: -9999px;

          &:hover {
            background-position: -40px -1588px;
          }
        }
      }
    }

    .item {
      display: inline-block;
      height: 31px;
      margin-right: 6px;
      padding-right: 5px;
      background-position: right -1020px;

      .icon {
        display: inline-block;
        height: 31px;
        line-height: 31px;
        padding: 0 7px 0 28px;
        font-family: simsun;
        font-style: normal;
      }

      .favor-icon {
        background-position: 0 -977px;

        &:hover {
          background-position: 0 -1063px;
        }
      }
    }
  }

  .hotsong-list {
    border: 1px solid #e2e2e2;

    margin-top: 10px;
    /* 隔行变色 */
    & tr:nth-of-type(odd) {
      background-color: #f7f7f7;
    }
    .hotsong-item {
      width: 100%;

      &:hover {
        .td-3 {
          .operate {
            display: inline-block;
          }
          .playlenght {
            display: none;
          }
        }
      }

      td {
        padding: 6px 10px;
        line-height: 18px;
        text-align: left;
        display: inline-block;
      }

      .td-1 {
        width: 75px;
        color: #999;
        position: relative;

        .icon-play {
          display: inline-block;
          width: 17px;
          height: 17px;
          cursor: pointer;
          background-position: 0 -103px;
          vertical-align: middle;
          position: absolute;
          right: 0;
        }
      }
      .td-2 {
        color: #333;
        width: 50%;

        a {
          display: inline-block;
          width: 100%;
        }
      }
      .td-3 {
        width: 110px;
        color: #666;

        .operate {
          display: flex;
          align-items: center;
          display: none;
          height: 18px;

          .btn {
            width: 18px;
            height: 16px;
            margin-left: 4px;
            cursor: pointer;
          }

          .addto {
            width: 13px;
            height: 13px;
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
      .td-4 {
        width: 20%;
        a {
          display: inline-block;
          width: 100%;
        }
      }
    }
  }
`;
