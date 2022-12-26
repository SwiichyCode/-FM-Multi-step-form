import PropTypes from "prop-types";
import * as S from "./styles.js";

export const Button = ({ text, theme, children, ...props }) => {
  return (
    <S.StyledButton theme={theme} {...props}>
      {text} {children}
    </S.StyledButton>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  theme: PropTypes.oneOf(["primary", "secondary", "default", "confirm"]),
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};
