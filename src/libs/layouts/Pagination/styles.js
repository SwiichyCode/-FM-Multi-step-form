import styled from "styled-components";
import bgSidebarDesktop from "../../../assets/images/bg-sidebar-desktop.svg";

const handleActive = (firstProps, secondProps) => {
  if (firstProps === secondProps)
    return "background-color: #BEE2FD; color: #022959; border: none; width: 35px; height: 35px;";
};

export const Container = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 16px;
  color: #ffffff;
  padding-top: 32px;

  @media (min-width: 768px) {
    max-width: 274px;
    height: 568px;
    flex-direction: column;
    justify-content: flex-start;
    gap: 32px;
    border-radius: 10px;
    padding: 40px 32px 0 32px;
    background-image: url(${bgSidebarDesktop});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const Box = styled.div`
  display: flex;
  height: min-content;
  gap: 16px;

  .item-index {
    width: 33px;
    height: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
    border-radius: 50%;
    border: 1px solid #ffffff;
    ${(props) => handleActive(props.currentStep, props.index)}
  }

  .item-box {
    display: none;
    flex-direction: column;
    gap: 4px;

    @media (min-width: 768px) {
      display: flex;
    }

    .item-step {
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.4rem;
      color: #abbcff;
    }
    .item-title {
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 1.6rem;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #ffffff;
    }
  }
`;
