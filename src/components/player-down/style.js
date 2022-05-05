import styled from "styled-components";

export const Wrapper = styled.div`
  /* CSS样式（支持嵌套样式） */
  .btn-list {
    display: flex;
    height: 67px;
    margin-top: 20px;
    margin-bottom: 10px;

    .btn_iphone {
      display: inline-block;
      width: 31px;
      height: 48px;
      background-position: -6px -392px;

      &:hover {
        background-position: -6px -472px;
      }
    }

    .btn_pc {
      display: inline-block;
      width: 61px;
      height: 48px;
      background-position: -72px -392px;

      margin: 0 26px 0 30px;

      &:hover {
        background-position: -72px -472px;
      }
    }

    .btn_android {
      display: inline-block;
      width: 30px;
      height: 48px;
      background-position: -163px -392px;

      &:hover {
        background-position: -163px -472px;
      }
    }
  }

  .text {
    color: #999;
  }
`;
