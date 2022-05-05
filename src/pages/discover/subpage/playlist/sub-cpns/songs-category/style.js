import styled from "styled-components";

export const Wrapper = styled.div`
  /* CSS样式（支持嵌套样式） */
  position: absolute;
  margin-top: 10px;
  margin-left: -30px;
  width: 700px;
  padding: 10px 10px;
  background-color: #fefefe;
  box-shadow: 0 0 10px 2px #d3d3d3;
  z-index: 5;

  .arrow {
    position: absolute;
    top: -11px;
    left: 132px;
    width: 24px;
    height: 11px;
    background-position: -48px 0;
  }

  .all {
    height: 37px;
    padding-left: 26px;
    border-bottom: 1px solid #e6e6e6;
    font-weight: normal;

    .link {
      width: 75px;
      height: 26px;
      background-position: 0 -64px;
      text-align: center;
      line-height: 26px;
    }
  }

  .category {
    padding-left: 25px;
    dl {
      display: flex;
      align-items: flex-start;
    }

    dt {
      display: inline-flex;
      align-items: center;
      padding: 15px 0 10px;
      width: 70px;
      text-align: center;

      i {
        display: inline-block;
        width: 24px;
        height: 24px;
        background-position: -20px -735px;
        margin-right: 8px;
      }
    }

    dl.item1 {
      i {
        background-position: 0 -60px;
      }
    }

    dl.item2 {
      i {
        background-position: 0 -88px;
      }
    }

    dl.item3 {
      i {
        background-position: 0 -117px;
      }
    }

    dl.item4 {
      i {
        background-position: 0 -141px;
      }

      dd {
        padding-bottom: 25px;
      }
    }

    dd {
      padding-top: 18px;
      padding-left: 15px;
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      border-left: 1px solid #e2e2e2;

      .item {
        margin-bottom: 8px;
      }

      a {
        color: #333;
      }

      .divider {
        margin: 0 12px;
        color: #e2e2e2;
      }
    }
  }
`;
