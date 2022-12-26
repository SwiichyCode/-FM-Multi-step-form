import React from "react";
import styled from "styled-components";

export const Form = ({ title, subtitle, id, children, ...props }) => {
  return (
    <Container id={id} {...props}>
      <div className="form-header">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      {children}
    </Container>
  );
};

const Container = styled.form`
  width: 100%;
  max-width: 92%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 22px;
  background: #ffffff;
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.0951141);
  border-radius: 10px;
  padding: 32px 24px;

  .form-header {
    display: flex;
    flex-direction: column;
    gap: 9px;

    h1 {
      font-weight: 700;
      font-size: 2.4rem;
      line-height: 2.8rem;
      color: #022959;
    }

    p {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 2.5rem;
      color: #9699aa;
    }
  }
`;
