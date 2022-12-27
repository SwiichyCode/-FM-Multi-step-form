import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: ${({ single }) => (single ? "flex-end" : "space-between")};
  align-items: center;
  background: #ffffff;
  padding: 16px;
  margin-top: 24px;

  @media (min-width: 768px) {
    max-width: 450px;
    padding: 0;
  }
`;
