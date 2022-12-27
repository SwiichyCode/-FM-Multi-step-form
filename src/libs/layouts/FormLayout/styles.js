import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  max-width: 92%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 22px;
  background: #ffffff;
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.0951141);
  border-radius: 10px;
  padding: 32px 24px;

  @media (min-width: 768px) {
    width: 100%;
    max-width: 450px;
    justify-content: space-between;
    gap: 40px;
    box-shadow: none;
    margin-top: 40px;
    padding: 0;
  }

  .form-header {
    display: flex;
    flex-direction: column;
    gap: 9px;

    @media (min-width: 768px) {
      gap: 11px;
    }

    h1 {
      font-weight: 700;
      font-size: 2.4rem;
      line-height: 2.8rem;
      color: #022959;

      @media (min-width: 768px) {
        font-size: 3.2rem;
        line-height: 3.6rem;
      }
    }

    p {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 2.5rem;
      color: #9699aa;
    }
  }
`;
