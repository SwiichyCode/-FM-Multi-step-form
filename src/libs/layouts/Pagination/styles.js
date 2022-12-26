import styled from "styled-components";
import bgSidebarDesktop from "../../../assets/images/bg-sidebar-desktop.svg";
import bgSidebarMobile from "../../../assets/images/bg-sidebar-mobile.svg";

const handleActive = (firstProps, secondProps) => {
  if (firstProps === secondProps)
    return "background-color: #BEE2FD; color: #022959; border: none; width: 35px; height: 35px;";
};

export const Container = styled.div`
  width: 100%;
  height: 172px;
  display: flex;
  justify-content: center;
  gap: 16px;
  color: #ffffff;
  background-image: url(${bgSidebarMobile});
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 32px;
`;

export const Box = styled.div`
  height: min-content;

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

  /* .item-box {
    display: flex;
    flex-direction: column;
    gap: 4px;

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
  } */
`;
