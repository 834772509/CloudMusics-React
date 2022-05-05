import styled from "styled-components";

export const Wrapper = styled.div`
  /* CSS样式（支持嵌套样式） */
  display: flex;
  flex-wrap: wrap;
  .image {
    position: relative;
    .msk {
      position: absolute;
      width: 209px;
      height: 177px;
      left: 0;
      top: 0;
      background-position: 0 -986px;
    }
  }
  .info {
    margin-left: 50px;
    .hand {
      .icon-album {
        display: inline-block;
        width: 54px;
        height: 24px;
        background-position: 0 -186px;
        vertical-align: top;
      }
      .title {
        display: inline-block;
        margin-left: 12px;
        margin-bottom: 12px;

        .alias-item {
          margin: 1px 0 5px;
          line-height: 14px;
          color: #bababa;
          font-size: 14px;
        }
      }
    }

    .album-info {
      margin-bottom: 20px;

      .artist {
      }
    }
  }

  .description {
    margin-top: 20px;
    .title {
      font-size: 100%;
      font-weight: bold;
    }
    .text {
      text-indent: 2em;
      color: #666;
      line-height: 24px;
    }
  }
`;
