import styled from "styled-components";
import { theme } from "./themes.js";

const handleChildren = (children) => {
  if (children)
    return "display: flex; align-items: center; justify-content: center; gap: 12px;";
};

export const StyledButton = styled.button`
  width: 100%; // Default Size
  max-width: ${(props) => props.mSize || "97px"}; // Default Size
  height: 40px; // Default Size
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.8rem;
  border-radius: 4px;
  border: none;
  padding: 0;
  cursor: pointer;
  color: ${(props) => theme[props.theme].color};
  background-color: ${(props) => theme[props.theme].backgroundColor};
  &:hover {
    background-color: ${(props) => theme[props.theme].hoverBackgroundColor};
    color: ${(props) => theme[props.theme].hoverColor};
  }
  ${(props) => handleChildren(props.children)};
  &:focus {
    outline: ${(props) => theme[props.theme].focus};
  }

  @media (min-width: 768px) {
    max-width: ${(props) => props.mSize || "123px"}; // Default Size
    height: 48px;
    font-weight: 1.6rem;
    border-radius: 8px;
  }
`;
