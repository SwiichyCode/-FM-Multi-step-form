import styled from "styled-components";

export const Price = styled.div`
  width: 100%;
  max-width: 263px;
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    max-width: 95%;
  }

  h2 {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2rem;
    color: #9699aa;
  }

  span {
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 2rem;
    text-align: right;
    color: #483eff;

    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }
`;
