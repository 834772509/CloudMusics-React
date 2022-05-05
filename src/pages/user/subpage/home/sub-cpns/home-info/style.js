import styled from "styled-components";

export const Wrapper = styled.div`
  /* CSS样式（支持嵌套样式） */
  display: flex;

  .image {
    img {
      display: block;
      width: 180px;
      height: 180px;
      padding: 3px;
      background: #fff;
      border: 1px solid #d5d5d5;
    }
  }

  .info {
    margin-left: 40px;
    width: 100%;

    .name {
      display: flex;

      .nickname {
        .icon-level {
          display: inline-block;
          height: 19px;
          overflow: hidden;
          padding-left: 29px;
          line-height: 21px;
          color: #e03a24;
          font-size: 14px;
          font-weight: bold;
          font-style: italic;
          background-position: -135px -190px;
          margin: 8px 0 0 10px;
          span {
            vertical-align: top;
          }

          .icon-level-right {
            display: inline-block;
            width: 9px;
            height: 19px;
            background-position: -191px -190px;
            overflow: hidden;
            line-height: 21px;
            color: #e03a24;
          }
        }
        .icon-sex-man {
          display: inline-block;
          margin: 9px 0 0 8px;
          width: 20px;
          height: 20px;
          background-position: -41px -57px;
        }
        .icon-sex-woman {
          display: inline-block;
          margin: 9px 0 0 8px;
          width: 20px;
          height: 20px;
          background-position: -41px -27px;
        }
      }
      .btns {
        display: flex;
        button {
          margin: 4px 0 0 15px;
          cursor: pointer;
          display: inline-block;
        }

        .btn-send {
          width: 75px;
          height: 31px;
          background-position: 0 -810px;

          &:hover {
            background-position: 0 -845px;
          }

          i {
            height: 29px;
            line-height: 29px;
            padding-left: 20px;
            font-style: normal;
          }
        }

        .btn-star {
          width: 70px;
          height: 31px;
          padding-left: 20px;
          background-position: 0 -720px;
          color: #fff;
          line-height: 30px;

          &:hover {
            background-position: -80px -720px;
          }
        }

        .btn-artist {
          color: #333;
          background-position: right -99px;

          i {
            display: inline-block;
            height: 31px;
            color: #333;
            background-position: 0 -59px;
            padding: 0 15px 0 20px;
            font-style: normal;
            line-height: 31px;

            &:hover {
              background-position: 0 -141px;
            }
          }
        }
      }
    }

    .djp {
      margin-top: 8px;
      font-size: 14px;
      .icon-tag {
        display: inline-block;
        margin-right: 6px;
        width: 68px;
        height: 20px;
        background-position: 0 -480px;
        vertical-align: top;
      }
    }

    .tab-box {
      width: 100%;
      margin-top: 10px;
      padding-top: 10px;
      border-top: 1px solid #ddd;
      margin-bottom: 15px;

      a {
        display: inline-block;
        color: #666;
        text-decoration: none;
        padding: 0 40px 0 20px;

        &:nth-child(n + 2) {
          border-left: 1px solid #ddd;
        }

        strong {
          display: block;
          margin-top: -4px;
          font-size: 24px;
          font-weight: normal;
          cursor: pointer;
        }
      }
    }
    .signature,
    .province {
      color: #666;
      margin-bottom: 5px;
      line-height: 21px;
    }
  }
`;
