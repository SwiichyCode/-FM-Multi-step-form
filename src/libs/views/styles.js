import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: ${({ active }) =>
    active
      ? "calc(100vh - 99px + 24px)"
      : "calc(100vh - 99px)"}; // 99px is the height of the header

  @media (min-width: 768px) {
    height: 100%;
  }
`;
