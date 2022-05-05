import styled from "styled-components";

export const Wrapper = styled.div`
  /* CSS样式（支持嵌套样式） */
  display: flex;
  position: relative;

  .msk {
    display: inline-block;
    position: absolute;
    width: 208px;
    height: 208px;
    background-position: 0 -1285px;
    top: -4px;
    left: -4px;
  }
`;

export const Left = styled.div`
  /* CSS样式（支持嵌套样式） */

  .hand {
    display: flex;
  }
`;
export const Right = styled.div`
  /* CSS样式（支持嵌套样式） */
  margin-left: 30px;

  .hand {
    display: flex;
    margin: 0 0 12px;

    .icon-playlist {
      display: inline-block;
      width: 54px;
      height: 24px;
      background-position: 0 -243px;
    }

    .title {
      margin-left: 10px;
      line-height: 24px;
      font-size: 20px;
      font-weight: normal;
    }
  }

  .user {
    margin: 0 0 20px;

    .avatar-img {
      margin-right: 10px;
    }

    .avatar-name {
      color: #0c73c2;
    }

    .icon-star {
      display: inline-block;
      width: 12px;
      height: 13px;
      background-position: -65px -840px;
      margin: 9px 0 0 3px;
    }

    .create-time {
      margin-left: 15px;
      color: #999;
    }
  }

  .song-operation-bar {
    margin-bottom: 25px;
  }
  .tags {
    color: #666;
    margin: 25px 0 5px;
    line-height: 22px;
  }

  .album {
    margin-top: 4px;
    line-height: 18px;
    color: #666;
  }
`;
