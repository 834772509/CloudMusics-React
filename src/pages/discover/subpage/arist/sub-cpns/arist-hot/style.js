import styled from "styled-components";

export const Wrapper = styled.div`
  /* CSS样式（支持嵌套样式） */

  .icon-user {
    display: inline-block;
    width: 17px;
    height: 18px;
    background-position: 0 -740px;
    vertical-align: middle;
    margin-left: 2px;
  }

  .artists-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .cover {
      width: 130px;
      height: 154px;
      margin-top: 30px;

      .image {
        position: relative;
        .tesk {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          background-position: 0 -680px;
        }
      }
      .info {
        margin-top: 8px;
        display: flex;
        justify-content: space-between;
      }
    }
  }

  .artists-little-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px dotted #999;

    .list-item {
      height: 30px;
      width: 130px;
    }
  }
`;
