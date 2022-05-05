import styled from "styled-components";

export const Wrapper = styled.div`
  /* CSS样式（支持嵌套样式） */
  .header {
    display: flex;
    margin-bottom: 25px;

    .image {
      border: 1px solid #d5d5d5;
    }

    .info {
      margin-left: 30px;
      .title {
        margin-bottom: 30px;

        .icon-program {
          display: inline-block;
          width: 73px;
          height: 24px;
          background-position: 0 -75px;
          margin-right: 5px;
          vertical-align: top;
        }
        h2 {
          display: inline;
          line-height: 24px;
          font-size: 20px;
          font-weight: normal;
        }
      }
      .rdiname {
        .icon-music {
          display: inline-block;
          width: 16px;
          height: 17px;
          background-position: -50px -20px;
          margin: 5px 7px 0 0;
          vertical-align: top;
        }

        .title {
          font-size: 16px;
          color: #666;
        }

        .btn-subscription {
          height: 28px;
          background-position: right -2400px;
          margin-left: 17px;
          line-height: 29px;
          color: #333;
          padding: 0 5px 0 0;
          cursor: pointer;

          &:hover {
            background-position: right -2470px;
          }

          .btn-sprite {
            padding: 0 10px;
            display: inline-block;
            height: 28px;
            background-position: 0 -2370px;
            min-width: 23px;

            &:hover {
              background-position: 0 -2440px;
            }
          }

          .icon-star {
            display: inline-block;
            width: 14px;
            height: 14px;
            background-position: -50px 0;
            margin-right: 4px;
          }
        }
      }
    }
  }

  .prointr {
    margin-top: 25px;

    .tag {
      display: inline-block;
      font-size: 12px;
      height: 16px;
      margin: -3px 9px 0 0;
      padding: 0 6px;
      color: #cc0000;
      border: 1px solid #cc0000;
      vertical-align: middle;
      line-height: 14px;

      &:hover {
        background: #fbeeee;
        text-decoration: none;
      }
    }

    .title {
      padding-bottom: 2px;
      max-width: 42%;
      font-weight: bold;
      font-size: 14px;
    }

    .create-date {
      color: #999;
      margin-left: 18px;
    }

    .listenerCount {
      color: #999;
      margin-left: 18px;

      em {
        color: #c20c0c;
        font-weight: bold;
        font-style: normal;
      }
    }
    .description {
      line-height: 23px;
      color: #666;
    }
  }
`;
