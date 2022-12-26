import React, { useState } from "react";
import styled from "styled-components";
import { Pagination } from "./libs/layouts/Pagination";
import { PersonalInformation } from "./libs/view/PersonalInformation";

export const App = () => {
  const [formData, setFormData] = useState({});
  const [currentStep, setCurrentStep] = useState(0);

  const components = [
    <PersonalInformation
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
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
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f2f2f2;
`;
