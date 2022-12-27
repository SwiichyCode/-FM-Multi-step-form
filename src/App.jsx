import React, { useState } from "react";
import styled from "styled-components";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { Pagination } from "./libs/layouts/Pagination";
import { PersonalInformation } from "./libs/views/PersonalInformation";
import { SelectPlan } from "./libs/views/SelectPlan";
import { PickAddons } from "./libs/views/PickAddons";
import { Summary } from "./libs/views/Summary";
import bgSidebarMobile from "./assets/images/bg-sidebar-mobile.svg";

export const initialState = {
  name: "",
  emailAddress: "",
  phoneNumber: "",
  plan: { title: "", price: 0, selected: false, duration: "" },
  addons: [{ title: "", subtitle: "", price: 0, checked: false }],
};

export const App = () => {
  const [formData, setFormData] = useLocalStorage("form-data", initialState);
  const [currentStep, setCurrentStep] = useLocalStorage("form-index", 0);

  console.log(formData);

  const components = [
    <PersonalInformation
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
      setFormData={setFormData}
    />,
    <SelectPlan
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
      formData={formData}
      setFormData={setFormData}
    />,
    <PickAddons
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
      formData={formData}
      setFormData={setFormData}
    />,
    <Summary
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
      formData={formData}
      setFormData={setFormData}
    />,
  ];

  return (
    <Container>
      <MultiStepForm>
        <Pagination currentStep={currentStep} />
        {components[currentStep]}
      </MultiStepForm>
    </Container>
  );
};

const Container = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #eff5ff;
  }
`;

const MultiStepForm = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  background: #eff5ff;
  background-image: url(${bgSidebarMobile});
  background-repeat: no-repeat;
  background-size: contain;

  @media (min-width: 768px) {
    max-width: 940px;
    height: 600px;
    flex-direction: initial;
    background-image: none;
    background: #fff;
    border-radius: 15px;
    padding: 16px;
    box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.0951141);
  }
`;
