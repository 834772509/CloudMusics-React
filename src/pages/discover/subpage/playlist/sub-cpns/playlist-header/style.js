import styled from "styled-components";

export const Wrapper = styled.div`
  /* CSS样式（支持嵌套样式） */

  display: flex;
  justify-content: space-between;
  height: 40px;
  border-bottom: 2px solid #c20c0c;

  .title {
    font-size: 24px;
    font-weight: normal;

    .select-classify {
      display: inline-block;
      background-position: right -99px;
      font-size: 12px;
      font-weight: normal;
      height: 31px;
      margin: 2px 0 0 12px;
      vertical-align: top;

      span {
        display: inline-block;
        background-position: 0 -59px;
        color: #0c73c2;
        padding: 0 10px 0 15px;
        height: 31px;
        line-height: 31px;

        .icon-select {
          display: inline-block;
          width: 8px;
          height: 5px;
          background-position: -70px -543px;
          margin-left: 5px;
        }
      }
    }
  }

  .right {
    .btn-hot {
      display: inline-block;
      height: 29px;
      background-position: 0 0;
      border-radius: 3px;
      width: 46px;
      height: 29px;
      line-height: 29px;
      text-align: center;
      color: #fff;
    }
  }
`;
