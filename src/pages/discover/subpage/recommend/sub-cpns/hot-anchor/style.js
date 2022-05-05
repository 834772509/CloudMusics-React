import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 30px;
  .hotdj-list {
    width: 230px;
    margin: 20px 0 0 20px;

    .item {
      display: flex;
      width: 210px;
      margin-bottom: 10px;
    }

    .info {
      line-height: 21px;
      margin-left: 10px;
      width: 160px;

      a {
        color: #000;
      }

      .position {
        color: #666;
        /* 强制显示一行文本 */
        white-space: nowrap;
        /* 超出部分隐藏 */
        overflow: hidden;
        /* 设置超出隐藏部分的文本 */
        text-overflow: ellipsis;
      }
    }
  }
`;
