import styled from "styled-components";

export const Wrapper = styled.div`
  /* CSS样式（支持嵌套样式） */
  display: none;
  position: absolute;
  z-index: 999;
  width: 530px;
  border-radius: 4px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.8);
  border: none;
  background: #fff;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  .header {
    border-bottom: 1px solid #191919;
    border-radius: 4px 4px 0 0;
    background: #2d2d2d;
    display: flex;
    justify-content: space-between;
    height: 38px;
    line-height: 38px;
    cursor: move;

    h2 {
      font-weight: bold;
      font-size: 14px;
      color: #fff;
      padding-left: 18px;
    }

    .button-close {
      display: inline-block;
      background-position: 0 -95px;
      width: 10px;
      height: 10px;
      cursor: pointer;
      transform: translateY(125%);
      margin-right: 20px;
    }
  }

  .content {
    background: #fff;
    border-width: 0 1px 1px;
    border-radius: 0 0 4px 4px;
    width: 100%;
    display: block;
    height: 100%;
    min-height: 200px;
  }

  .footer {
    padding: 0 19px;
    height: 48px;
    border-top: 1px solid #c6c6c6;
    border-radius: 0 0 4px 4px;
    line-height: 48px;
    background-color: #f7f7f7;
  }
`;
