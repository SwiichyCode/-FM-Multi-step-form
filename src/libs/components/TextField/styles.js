import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledInput = styled.input`
  height: 48px;
  background-color: transparent;
  border: 1px solid #d6d9e6;
  border-radius: 8px;
  padding: 0 0 0 16px;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #022959;
  box-sizing: border-box;

  &:focus {
    outline: ${(props) =>
      props.errors ? "1px solid #EE374A" : "1px solid #483eff"};
    border: none;
  }
`;

export const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Label = styled.label`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #022959;
`;

export const ErrorMessage = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: #ee374a;
`;
