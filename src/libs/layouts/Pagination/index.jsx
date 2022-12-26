import React from "react";
import * as S from "./styles.js";

export const Pagination = ({ currentStep }) => {
  const items = [
    { index: 0, step: "STEP 1", title: "YOUR INFO" },
    { index: 1, step: "STEP 2", title: "SELECT PLAN" },
    { index: 2, step: "STEP 3", title: "ADD-ONS" },
    { index: 3, step: "STEP 4", title: "SUMMARY" },
  ];
  return (
    <S.Container>
      {items.map(({ index, step, title }) => {
        return (
          <S.Box key={index} currentStep={currentStep} index={index}>
            <span className="item-index">{index + 1}</span>
            {/* <div className="item-box">
              <span className="item-step">{step}</span>
              <h2 className="item-title">{title}</h2>
            </div> */}
          </S.Box>
        );
      })}
    </S.Container>
  );
};
