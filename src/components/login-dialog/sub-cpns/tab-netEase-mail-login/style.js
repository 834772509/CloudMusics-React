import styled from "styled-components";

export const Wrapper = styled.div`
  /* CSS样式（支持嵌套样式） */
  .content {
    width: 220px;
    margin: 0 auto;
    padding: 30px 0 43px;

    .password {
      margin-top: 10px;
    }

    .option {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
    }

    .button {
      margin-top: 20px;
    }
  }
`;
