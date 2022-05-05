import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  i {
    font-style: normal;
  }

  .image {
    width: 206px;

    .image-box {
      display: flex;
      position: relative;
      justify-content: center;
      align-items: center;
      width: 198px;
      height: 198px;

      .cover {
        position: absolute;

        background-position: -140px -580px;
        width: 206px;
        height: 205px;
        top: -4px;
        left: -4px;
      }
    }

    .createPlayer {
      margin: 20px 0 0 46px;
      
      .icon-music {
        display: inline-block;
        width: 16px;
        height: 16px;
        background-position: -34px -861px;
      }
      a {
        text-decoration: underline;
        color: #0c73c2;
        line-height: 16px;
      }
    }
  }

  .dnt {
    width: 414px;

    .title {
      .icon-type {
        display: inline-block;
        width: 54px;
        height: 24px;
        background-position: 0 -463px;
      }
      h2 {
        display: inline-block;
        margin-left: 10px;
        font-size: 24px;
        margin-right: 7px;
      }
      .icon-mv {
        display: inline-block;
        width: 21px;
        height: 18px;
        background-position: 0 -18px;
      }
    }

    .des {
      color: #999;
      margin: 10px 0;

      span {
        color: #0c73c2;
      }
    }

    .buttons {
      display: flex;
      button {
        height: 31px;
      }

      .play {
        color: #fff;
        background-position: right -428px;
      }
      .add-list {
        width: 31px;

        margin-left: -3px;
        padding-right: 0;
        background-position: 0 -1588px;
      }
    }

    .lyricList {
      margin-top: 13px;
      line-height: 23px;
    }
  }
`;
