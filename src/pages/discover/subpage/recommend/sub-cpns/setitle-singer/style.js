import styled from "styled-components";

export const Wrapper = styled.div`
  width: 250px;
  height: 455px;
  margin-top: 30px;

  .SingerList {
    height: 380px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    /* margin: 6px 0 14px 20px; */
  }

  .button-link {
    display: block;
    width: 210px;
    height: 31px;
    margin: 12px auto;
    color: #333;
    font-weight: 700;
    text-align: center;
    line-height: 31px;
    border-radius: 4px;
    background-color: #fafafa;
    border: 1px solid #c3c3c3;
    text-decoration: none;

    &:hover {
      background-color: #fff;
    }
  }
`;

export const SingerInfoWrapper = styled.div`
  width: 210px;
  height: 62px;

  .Singer {
    font-size: 14px;
    display: flex;
    text-decoration: none;

    .image {
    }

    .info {
      padding-top: 8px;
      width: 148px;
      padding-left: 14px;
      border: 1px solid #e9e9e9;
      border-left: none;
      background: #fafafa;

      h4,
      p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: normal;
      }

      &:hover {
        background: #f4f4f4;
      }
    }
  }
`;
