import styled from "styled-components";

export const Wrapper = styled.div`
  /* CSS样式（支持嵌套样式） */
  margin-bottom: 25px;

  .simi-list {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    .left {
      width: 156px;
      .song-info {
        a {
          display: inline-block;
          width: 100%;
          color: #333;
        }
      }
      .artist-list {
        .artist-info {
          a {
            color: #999;
          }
        }
      }
    }

    .right {
      transform: translateY(10%);

      .play {
        display: inline-block;
        width: 10px;
        height: 11px;
        margin-right: 16px;
        background-position: -69px -455px;
      }

      .add-list {
        display: inline-block;
        width: 10px;
        height: 11px;
        background-position: -87px -454px;
      }
    }
  }
`;
