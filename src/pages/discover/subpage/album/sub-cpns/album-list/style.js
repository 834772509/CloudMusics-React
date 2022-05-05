import styled from "styled-components";

export const Wrapper = styled.div`
  /* CSS样式（支持嵌套样式） */

  .album-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .album-item {
      width: 153px;
      height: 178px;
      margin: 25px 0;
      margin-right: 30px;

      .image {
        position: relative;
        &:hover {
          .icon-play {
            display: block;
          }
        }
        .msk {
          position: absolute;
          width: 153px;
          height: 130px;
          top: 0;
          left: 0;
          background-position: 0 -845px;
        }
        .icon-play {
          position: absolute;
          display: none;

          width: 28px;
          height: 28px;
          right: 30px;
          bottom: 5px;
          background-position: 0 -170px;
        }
      }
      .title {
        margin: 8px 0 3px;
        font-size: 14px;
        a {
          display: inline-block;
          width: 100%;
          color: #000;
        }
      }
      .artists {
        color: #333;
        a {
          display: inline-block;
          max-width: 85%;
          font-size: 12px;
        }
      }
    }
  }
`;
