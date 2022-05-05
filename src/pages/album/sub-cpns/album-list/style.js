import styled from "styled-components";

export const Wrapper = styled.div`
  /* CSS样式（支持嵌套样式） */
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

    .play-des {
      .icon-music {
        display: inline-block;
        width: 16px;
        height: 16px;
        background-position: -34px -863px;
        vertical-align: middle;
      }
      .des {
        color: #4996d1;
      }
    }
  }

  .song-list {
    border: 1px solid #d9d9d9;
    .header {
      height: 38px;
      line-height: 18px;
      background-color: #f7f7f7;
      border: 1px solid #d3d3d3;

      .ranking {
        width: 77px;
        border: 1px solid #d3d3d3;

        padding: 8px 10px;
      }
      .title {
        width: 327px;

        height: 38px;
        border: 1px solid #d3d3d3;
        padding: 8px 10px;
      }
      .duration {
        width: 111px;
        border: 1px solid #d3d3d3;
        padding: 8px 10px;
      }
      .singer {
        width: 10%;
        border: 1px solid #d3d3d3;
        padding: 8px 10px;
      }
    }

    .table-body {
      td {
        padding: 6px 10px;
        line-height: 18px;
        text-align: left;
      }

      & tr:nth-of-type(odd) {
        background-color: #f7f7f7;
      }

      .td-count {
        display: flex;
        justify-content: space-between;
        color: #999;

        .icon-play {
          display: inline-block;
          width: 17px;
          height: 17px;
          background-position: -267px -268px;

          &:hover {
            background-position: -267px -288px;
          }
        }
      }

      .td-title {
        .title {
          width: 100%;
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }

      .td-playlenght {
        width: 20%;

        .playlenght {
          display: inline-block;
          width: 100%;
        }
      }
      .td-artist {
        width: 10%;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        .artist-info a {
          display: inline-block;
        }
      }

      .operate {
        display: flex;
        align-items: center;
        display: none;
        height: 18px;

        .btn {
          width: 18px;
          height: 16px;
          margin-left: 2px;
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

      .list-item {
        .playlenght {
          color: #666;
          height: 18px;
          text-align: left;
          display: inline-block;
        }

        &:hover {
          .operate {
            display: inline-block;
          }
          .playlenght {
            display: none;
          }
        }
      }
    }
  }
`;
