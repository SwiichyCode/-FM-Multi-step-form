import PropTypes from "prop-types";
import * as S from "./styles.js";

export const TextField = ({
  label,
  name,
  value,
  register,
  onChange,
  error,
  placeholder,
}) => {
  return (
    <S.Container>
      <S.LabelWrapper>
        <S.Label htmlFor={name}>{label}</S.Label>
        {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
      </S.LabelWrapper>

      <S.StyledInput
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-describedby={`${name}-error-message`}
        {...register(name)}
        readOnly={false}
        type="text"
      />
    </S.Container>
  );
};

TextField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  register: PropTypes.func,
  onChange: PropTypes.func,
  error: PropTypes.string,
  placeholder: PropTypes.string,
};
