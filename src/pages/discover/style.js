import styled from "styled-components";

export const DiscoverWrapper = styled.div`
  .top {
    background-color: #c20c0c;
    height: 35px;
    padding-left: 250px;
  }
`;

export const TopMentu = styled.div`
  display: flex;
  .item a {
    display: inline-block;
    color: #fff;
    text-decoration: none;
    padding: 0 13px;
    margin: 7px 17px 0;
    line-height: 20px;

    &:hover,
    &.active {
      background-color: #9b0909;
      border-radius: 20px;
    }
  }
`;
