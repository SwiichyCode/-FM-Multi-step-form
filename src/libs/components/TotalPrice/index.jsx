import React from "react";
import * as S from "./styles.js";

export const TotalPrice = ({ duration, monthOrYear, getTotalPrice }) => {
  return (
    <S.Price>
      <h2>Total ({duration === "monthly" ? "per month" : "per year"})</h2>
      <span>
        ${getTotalPrice()}
        {monthOrYear}
      </span>
    </S.Price>
  );
};
