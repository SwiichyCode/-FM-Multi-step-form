import PropTypes from "prop-types";
import { useState } from "react";
import { initialState } from "../../../App";
import { NavigationLayout } from "../../layouts/NavigationLayout";
import { FormLayout } from "../../layouts/FormLayout";
import { Button } from "../../components/Button";
import { SummaryCard } from "../../components/SummaryCard";
import { TotalPrice } from "../../components/TotalPrice";
import { Confirmation } from "../../components/Confirmation";
import * as GS from "../styles.js";
import * as S from "./styles.js";

export const Summary = ({
  currentStep,
  setCurrentStep,
  formData,
  setFormData,
}) => {
  const { plan, addons } = formData;
  const [submit, setSubmit] = useState(false);
  const duration = plan.duration;
  const monthOrYear = duration === "monthly" ? "/mo" : "/yr";

  const getTotalPrice = () => {
    const planPrice = plan.price;
    const addOnsPrice = addons.reduce((acc, item) => {
      return acc + item.price;
    }, 0);

    return planPrice + addOnsPrice;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    setSubmit(true);
  };

  const handleReset = () => {
    setFormData(initialState);
    setCurrentStep(0);
  };

  const handleChange = () => {
    setCurrentStep(1);
  };
  return !submit ? (
    <GS.Container>
      <FormLayout
        id="summary"
        onSubmit={handleSubmit}
        title="Finishing up"
        subtitle="Double-check everything looks OK before confirming."
      >
        <S.Wrapper>
          <SummaryCard
            plan={plan}
            addons={addons}
            monthOrYear={monthOrYear}
            handleChange={handleChange}
          />
          <TotalPrice
            duration={duration}
            monthOrYear={monthOrYear}
            getTotalPrice={getTotalPrice}
          />
        </S.Wrapper>
      </FormLayout>
      <NavigationLayout>
        <Button
          text="Go Back"
          theme="default"
          onClick={() => setCurrentStep(currentStep - 1)}
        />
        <Button text="Confirm" theme="confirm" form="summary" />
      </NavigationLayout>
    </GS.Container>
  ) : (
    <GS.Container role={"alertdialog"}>
      <Confirmation handleReset={handleReset} />
    </GS.Container>
  );
};

Summary.propTypes = {
  currentStep: PropTypes.number.isRequired,
  setCurrentStep: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
};
