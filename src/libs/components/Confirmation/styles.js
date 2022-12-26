import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 92%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.0951141);
  border-radius: 10px;
  padding: 0 24px;

  img {
    width: 56px;
    margin-bottom: 24px;
  }

  h1 {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 2.8rem;

    color: #022959;
    margin-bottom: 9px;
  }

  p {
    max-width: 450px;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.5rem;
    text-align: center;
    color: #9699aa;
    margin-bottom: 12px;
  }
`;
