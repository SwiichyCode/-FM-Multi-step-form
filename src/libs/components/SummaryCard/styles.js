import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #f8f9ff;
  border-radius: 8px;
  padding: 16px 24px 24px 24px;
  box-sizing: border-box;

  .header-card {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header-left {
      display: flex;
      flex-direction: column;
      gap: 7px;

      h1 {
        font-weight: 600;
        font-size: 1.4rem;
        line-height: 1.6rem;
        color: #022959;
        text-transform: capitalize;
      }

      span {
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 2rem;
        text-decoration-line: underline;
        color: #9699aa;
        cursor: pointer;
      }
    }
    .header-right {
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 2rem;
      color: #022959;
    }
  }

  .addOns-list {
    display: flex;
    flex-direction: column;
    gap: 16px;

    .item-list {
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        font-weight: 600;
        font-size: 1.4rem;
        line-height: 2rem;
      }

      span:nth-child(1) {
        color: #9699aa;
      }
      span:nth-child(2) {
        color: #022959;
      }
    }
  }
`;

export const Subline = styled.div`
  width: 100%;
  height: 1px;
  background: #e5e5e5;
  margin-bottom: 16px;
  margin-top: 24px;
`;
