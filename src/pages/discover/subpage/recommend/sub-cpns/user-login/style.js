import styled from "styled-components";

export const Wrapper = styled.div`
  background-position: 0 0;
  width: 250px;
  height: 126px;

  .note {
    /* width: 205px; */
    color: #666;
    text-align: center;
    padding: 16px 5px;
    line-height: 22px;
  }

  .button-login {
    display: block;
    width: 100px;
    height: 31px;
    color: white;
    background-position: 0 -195px;
    line-height: 31px;
    text-align: center;
    text-decoration: none;
    margin: 0 auto;

    &:hover {
      background-position: -110px -195px;
    }
  }
`;
