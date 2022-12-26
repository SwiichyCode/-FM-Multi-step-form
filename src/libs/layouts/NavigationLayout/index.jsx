import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

export const NavigationLayout = ({ children, single }) => {
  return <S.Container single={single}>{children}</S.Container>;
};

NavigationLayout.propTypes = {
  children: PropTypes.node.isRequired,
  single: PropTypes.bool,
};
