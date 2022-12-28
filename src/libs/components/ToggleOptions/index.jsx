import PropTypes from "prop-types";
import { ToggleSwitch } from "../ToggleSwitch";
import * as S from "./styles";

export const ToggleOptions = ({ monthlyOn, handleToggle }) => {
  return (
    <S.Container>
      <S.Option style={{ color: monthlyOn ? "#9699AA" : "#022959" }}>
        Monthly
      </S.Option>
      <ToggleSwitch isOn={monthlyOn} handleToggle={handleToggle} tab={0} />
      <S.Option style={{ color: monthlyOn ? "#022959" : "#9699AA" }}>
        Yearly
      </S.Option>
    </S.Container>
  );
};

ToggleOptions.propTypes = {
  monthlyOn: PropTypes.bool,
  handleToggle: PropTypes.func,
};
