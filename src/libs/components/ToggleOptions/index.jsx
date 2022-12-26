import React from "react";
import { ToggleSwitch } from "../ToggleSwitch";
import * as S from "./styles";

export const ToggleOptions = ({ monthlyOn, handleToggle }) => {
  return (
    <S.Container>
      <S.Option style={{ color: monthlyOn ? "#9699AA" : "#022959" }}>
        Monthly
      </S.Option>
      <ToggleSwitch isOn={monthlyOn} handleToggle={handleToggle} />
      <S.Option style={{ color: monthlyOn ? "#022959" : "#9699AA" }}>
        Yearly
      </S.Option>
    </S.Container>
  );
};