import PropTypes from "prop-types";
import * as S from "./styles.js";

export const Checkbox = ({ className, checked, ...props }) => {
  return (
    <S.CheckboxContainer className={className}>
      <S.HiddenCheckbox checked={checked} {...props} />
      <S.StyledCheckbox checked={checked}>
        <S.Icon viewBox="0 0 12 9">
          <path fill="none" d="m1 4 3.433 3.433L10.866 1" />
        </S.Icon>
      </S.StyledCheckbox>
    </S.CheckboxContainer>
  );
};

Checkbox.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool.isRequired,
};
