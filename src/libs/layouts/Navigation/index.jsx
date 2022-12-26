import React from "react";
import styled from "styled-components";

export const Navigation = ({ children, single }) => {
  return <Container single={single}>{children}</Container>;
};

const Container = styled.nav`
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: ${({ single }) => (single ? "flex-end" : "space-between")};
  align-items: center;
  background: #ffffff;
  padding: 16px;
`;
