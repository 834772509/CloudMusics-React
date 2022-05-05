import styled from "styled-components";

export const Wrapper = styled.div`
  /* CSS样式（支持嵌套样式） */
  .info {
    display: flex;

    .alias {
      max-width: 23%;
      margin-left: 10px;
      font-size: 14px;
      line-height: 32px;
      color: #999;
      font-weight: normal;
    }
  }
  .image {
    position: relative;
    .artist-home {
      position: absolute;
      display: inline-block;
      width: 96px;
      height: 32px;
      bottom: 18px;
      right: 116px;
      background-position: 0 -1156px;
      &:hover {
        background-position: 0 -1196px;
      }
    }
    .artist-collect {
      position: absolute;
      display: inline-block;
      width: 76px;
      height: 32px;
      bottom: 18px;
      right: 20px;
      background-position: 0 -500px;

      &:hover {
        background-position: 0 -540px;
      }
    }
  }
  .nav {
    background: #f8f8f8;
    height: 39px;
    border: 1px solid #ccc;
    border-width: 0 1px;

    display: flex;
    justify-content: start;

    a {
      display: inline-block;
      width: 134px;
      height: 39px;
      line-height: 39px;
      font-size: 14px;
      padding-left: 2px;
      text-decoration: none;
      color: #333;
      text-align: center;
      border: 2px solid #ccc;

      &:hover {
        border-top: 2px solid #d13030;
      }

      &.active{
        
      }
    }
  }
`;
