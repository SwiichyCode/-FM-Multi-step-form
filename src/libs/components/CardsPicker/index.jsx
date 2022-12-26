import React from "react";
import * as S from "./styles";

export const CardPicker = ({ cards, monthlyOn, handleSelect }) => {
  return (
    <S.Container>
      {cards.map(({ img, title, price, selected, id }) => {
        return (
          <S.Card selected={selected} key={id} onClick={() => handleSelect(id)}>
            <img src={img} alt="" />
            <S.Box>
              <h2>{title}</h2>
              <span>${!monthlyOn ? `${price}/mo` : `${price * 10}/yr`}</span>
              {monthlyOn && (
                <span className={monthlyOn ? "visible" : null}>
                  2 months free
                </span>
              )}
            </S.Box>
          </S.Card>
        );
      })}
    </S.Container>
  );
};
