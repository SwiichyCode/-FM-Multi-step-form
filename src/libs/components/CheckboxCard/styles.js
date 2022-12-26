import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 81px;
  background: #ffffff;
  border: ${({ checked }) =>
    checked ? "1px solid #483EFF" : "1px solid #D6D9E6"};
  border-radius: 8px;
  padding: 0 24px;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 150ms;

  &:hover {
    border: 1px solid #483eff;
  }

  .left-side {
    display: flex;
    align-items: center;
    gap: 24px;

    .title {
      display: flex;
      flex-direction: column;
      gap: 7px;
    }

    h1 {
      font-weight: 600;
      font-size: 16px;
      line-height: 18px;
      color: #022959;
    }

    h2 {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #9699aa;
    }
  }

  .rigth-side {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: right;
    color: #483eff;
  }

  input {
    margin: 0;
  }
`;
