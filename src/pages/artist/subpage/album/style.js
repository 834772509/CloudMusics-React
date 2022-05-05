import styled from "styled-components";

export const Wrapper = styled.div`
  /* CSS样式（支持嵌套样式） */

  .album-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .album-item {
      width: 145px;
      height: 175px;
      margin-top: 20px;

      .image {
        position: relative;

        &:hover {
          .icon-play {
            display: block;
          }
        }
        .msk {
          display: inline-block;
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          background-position: -170px -850px;
        }

        .icon-play {
          position: absolute;
          right: 30px;
          bottom: 5px;
          display: none;
          width: 28px;
          height: 28px;
          background-position: 0 -170px;
        }
      }

      .title {
        margin-top: 8px;
        a {
          font-size: 14px;
          color: #000;
        }
      }

      .date {
        color: #666;
      }
    }
  }
`;
