import styled from "styled-components";

export const Wrapper = styled.div`
  /* CSS样式（支持嵌套样式） */

  .nav {
    display: inline-block;
    /* background: pink; */
    width: 100%;
    height: 100%;
    text-decoration: none;

    display: flex;
    padding: 10px 0 10px 20px;

    &:active {
      /* background: #e6e6e6; */
    }

    .image {
      margin-right: 10px;
    }

    .info {
      display: flex;
      flex-direction: column;

      .title {
        color: #000;
        padding: 0;
        margin-top: 2px;
      }

      .updateFrequency {
        color: #999;
      }
    }

    &:hover {
      background-color: #F4F2F2;
    }

    &.active {
      background: pink;
    }
  }
`;
