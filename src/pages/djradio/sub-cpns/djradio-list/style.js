import styled from "styled-components";

export const Wrapper = styled.div`
  /* CSS样式（支持嵌套样式） */
  margin-top: 27px;

  .header-title {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #c20c0c;

    h3 {
      font-size: 20px;
      line-height: 28px;
    }

    .song-count {
      margin: 9px 0 0 20px;
      color: #666;
      font-size: 12px;
    }
  }

  .header-button {
    .icon-music {
      display: inline-block;
      width: 16px;
      height: 16px;
      line-height: 16px;
      vertical-align: middle;
      background-position: -34px -863px;
    }
    .link-outchain {
      color: #0c73c2;
    }
  }

  .song-list {
    border: 1px solid #d9d9d9;
    margin-bottom: 20px;

    .table-body {
      width: 100%;
      td {
        padding: 6px 20px;
        line-height: 18px;
        text-align: left;
      }

      & tr:nth-of-type(odd) {
        background-color: #f7f7f7;
      }

      .td-count {
        display: flex;
        width: 62px;
        padding: 0;
        margin: 10px 0;
        justify-content: center;
        color: #999;
        vertical-align: middle;

        .icon-play {
          display: inline-block;
          width: 17px;
          height: 17px;
          margin-left: 10px;
          background-position: -267px -268px;

          &:hover {
            background-position: -267px -288px;
          }
        }
      }

      .td-title {
        /* width: 100%; */

        a {
          display: inline-block;
          width: 230px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }

      .td-listenerCount {
        /* width: 60px; */
        white-space: nowrap;
      }
      .td-likedCount {
        /* width: 70px; */
        white-space: nowrap;
      }

      .td-date {
        /* width: 90px; */
      }
      .td-playlength {
      }

      .operate {
        display: flex;
        align-items: center;
        display: none;
        height: 18px;

        .btn {
          width: 18px;
          height: 16px;
          margin-left: 0.5px;
          cursor: pointer;
        }

        .addto {
          width: 13px;
          height: 13px;
          background-position: 0 -700px;
        }

        .share {
          background-position: 0 -195px;
        }
        .down {
          background-position: -81px -174px;
        }
      }

      .list-item {
        &:hover {
          .operate {
            display: inline-block;
          }

          .td-title {
            a {
              width: 170px;
            }
          }
        }
      }
    }
  }
`;
