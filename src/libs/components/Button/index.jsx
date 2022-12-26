import styled from "styled-components";
import PropTypes from "prop-types";
import { theme } from "./themes.js";

export const Button = ({ text, theme, children, ...props }) => {
  return (
    <StyledButton theme={theme} {...props}>
      {text} {children}
    </StyledButton>
  );
};

const handleChildren = (children) => {
  if (children)
    return "display: flex; align-items: center; justify-content: center; gap: 12px;";
};

const StyledButton = styled.button`
  width: 100%; // Default Size
  max-width: ${(props) => props.mSize || "123px"}; // Default Size
  height: 48px; // Default Size
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.8rem;
  border-radius: 0.8rem;
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
`;

Button.propTypes = {
  text: PropTypes.string,
  theme: PropTypes.oneOf(["primary", "secondary", "default", "confirm"]),
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};
