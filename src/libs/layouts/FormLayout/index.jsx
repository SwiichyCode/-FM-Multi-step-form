import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

export const FormLayout = ({ title, subtitle, id, children, ...props }) => {
  return (
    <S.Container id={id} {...props}>
      <div className="form-header">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      {children}
    </S.Container>
  );
};

FormLayout.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
};
