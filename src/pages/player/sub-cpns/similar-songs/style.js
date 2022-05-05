import styled from "styled-components";

export const PlayerSongsWrapper = styled.div`
  .playlist-list {
    .playlist-item {
      width: 200px;
      display: flex;
      align-items: center;
      margin-top: 15px;
      margin-bottom: 25px;
      .image {
        width: 50px;
        height: 50px;
      }
      .info {
        margin-left: 10px;
        .title {
          font-size: 14px;

          a {
            color: #000;
            display: inline-block;
            width: 140px;
          }
        }

        .auchor {
          color: #999;
          .nickname {
            color: #666;
            margin-left: 5px;
          }
        }
      }
    }
  }
`;
