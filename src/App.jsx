import React, { useState } from "react";
import styled from "styled-components";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { Pagination } from "./libs/layouts/Pagination";
import { PersonalInformation } from "./libs/view/PersonalInformation";
import { SelectPlan } from "./libs/view/SelectPlan";
import { PickAddons } from "./libs/view/PickAddons";
import { Summary } from "./libs/view/Summary";
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
      <Pagination currentStep={currentStep} />
      {components[currentStep]}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  background: #eff5ff;
  background-image: url(${bgSidebarMobile});
  background-repeat: no-repeat;
`;
