import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 768px) {
    flex-direction: initial;
    gap: 18px;
  }
`;

export const Card = styled.div`
  display: flex;
  width: 100%;
  background: #f8f9ff;
  border: ${(props) =>
    props.selected ? "1px solid #483EFF" : "1px solid #d6d9e6"};
  border-radius: 8px;
  padding: 14px 0 18px 16px;
  gap: 14px;
  user-select: none;
  cursor: pointer;

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    max-width: 138px;
    height: 183px;
    gap: initial;
    padding: 20px 0 16px 16px;
  }

  img {
    width: 100%;
    max-width: 40px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  h2 {
    font-weight: bold;
    font-size: 1.6rem;
    line-height: 1.8rem;
    color: #022959;
  }

  span {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.6rem;
    color: #9699aa;
  }

  span:nth-child(3) {
    font-weight: bold;
    font-size: 1.2rem;
    color: #022959;
    animation: ease-in fadeIn 2s;
  }
`;
