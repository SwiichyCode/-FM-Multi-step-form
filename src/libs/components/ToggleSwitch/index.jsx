import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles.js";

export const ToggleSwitch = ({ isOn, handleToggle }) => {
  return (
    <S.ToggleSwitchContainer>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
        tabIndex={4}
      >
        <span className={`react-switch-button`} />
      </label>
    </S.ToggleSwitchContainer>
  );
};

ToggleSwitch.propTypes = {
  isOn: PropTypes.bool,
  handleToggle: PropTypes.func,
  handleClick: PropTypes.func,
};
