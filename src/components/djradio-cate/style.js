import styled from "styled-components";

export const Wrapper = styled.div`
  /* CSS样式（支持嵌套样式） */
  width: 933px;
  position: relative;

  transform: translateX(-3%);

  .icon-last {
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    width: 20px;
    height: 30px;
    background-position: 0 -30px;
    margin-top: -15px;
    z-index: 10;
  }

  .icon-next {
    display: block;
    position: absolute;
    top: 50%;
    width: 20px;
    height: 30px;
    margin-top: -15px;
    right: -26px;
    background-position: -30px -30px;
    z-index: 10;
  }

  .cate-list {
  }

  .page {
    display: flex;
    justify-content: space-between;
  }
`;

export const CateItem = styled.div`
  width: 70px;
  height: 72px;
  display: inline-block;
  margin: 0 0 25px 33px;
  text-align: center;

  &:hover {
    background-color: #f6f7f7;
  }

  .cate-link {
    text-decoration: none;

    .icon {
      display: inline-block;
      width: 48px;
      height: 48px;
      margin: 2px auto 0;
      background: url(${(props) => props.cateIcon});
      background-position: 0 0;
    }

    .title {
      color: #888;
      font-size: 12px;
    }
  }
`;
