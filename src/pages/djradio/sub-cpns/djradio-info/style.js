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

    .icon-djradio {
      display: inline-block;
      width: 54px;
      height: 24px;
      background-position: 0 -1014px;
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

    .create-time {
      margin-left: 15px;
      color: #999;
    }
  }

  .intr {
    margin-top: 25px;

    .category {
      height: 16px;
      line-height: 16px;
      color: #cc0000;
      margin-right: 7px;
      padding: 0 6px;
      text-decoration: none;
      border: 1px solid #cc0000;

      &:hover {
        background: #fbeeee;
      }
    }
  }
`;
