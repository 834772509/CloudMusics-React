import styled from "styled-components";

export const Wrapper = styled.div`
  /* CSS样式（支持嵌套样式） */
  .header {
    height: 40px;
    border-bottom: 2px solid #c20c0c;
    display: flex;
    justify-content: space-between;

    h3 {
      font-size: 24px;
      font-weight: normal;
    }

    .sort {
      margin: 12px 0 0 0;
      .goup {
        color: #c20c0c;
      }
      .line {
        margin: 0 10px;
        color: #c7c7c7;
      }
      .newest {
        color: #666;
      }
    }
  }

  .djradio-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .djradio-item {
      display: flex;
      width: 435px;
      height: 160px;
      border-bottom: 1px solid #e7e7e7;
      padding: 20px 0;

      .info {
        margin-left: 20px;
        .title {
          height: 64px;
          line-height: 64px;
          font-size: 18px;
          font-weight: bold;

          a {
            color: #333;
          }
        }

        .icon-user {
          display: inline-block;
          width: 14px;
          height: 15px;
          background-position: -50px -300px;
          vertical-align: middle;
        }

        .user-name {
          margin-left: 5px;
        }
        .count {
          color: #999;
          span {
            margin-right: 10px;
          }
        }
      }
    }
  }
`;
