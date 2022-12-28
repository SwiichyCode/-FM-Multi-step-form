import styled from "styled-components";
import * as S from "../../components/TextField/styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 768px) {
    gap: 32px;
  }
`;

export const ErrorMessage = styled(S.ErrorMessage)``;
