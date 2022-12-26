import { useState } from "react";
import { FormLayout } from "../../layouts/FormLayout";
import { NavigationLayout } from "../../layouts/NavigationLayout";
import { initialStateCard } from "./stores";
import { useToggle } from "../../../hooks/useToggle";
import { CardPicker } from "../../components/CardsPicker";
import { ToggleOptions } from "../../components/ToggleOptions";
import { Button } from "../../components/Button";
import * as GS from "../styles";
import * as S from "./styles";

export const SelectPlan = ({
  currentStep,
  setCurrentStep,
  formData,
  setFormData,
}) => {
  const [cards, setCards] = useState(initialStateCard);
  const [monthlyOn, handleToggle] = useToggle(false);

  const handleSelect = (id) => {
    const newItems = cards.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          selected: true,
        };
      }
      return { ...item, selected: false };
    });
    setCards(newItems);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const selectedItem = cards.find((item) => item.selected);
    if (!selectedItem) return setErrorMessage("Please select a plan");

    setFormData({
      ...formData,
      plan: {
        title: selectedItem.title,
        price: monthlyOn ? selectedItem.price * 10 : selectedItem.price,
        duration: monthlyOn ? "yearly" : "monthly",
      },
    });
    setCurrentStep(currentStep + 1);
  };

  return (
    <GS.Container active>
      <FormLayout
        id="select-plan"
        onSubmit={onSubmit}
        title="Select your plan"
        subtitle="You have the option of monthly or yearly billing."
      >
        <S.Wrapper>
          <CardPicker
            cards={cards}
            monthlyOn={monthlyOn}
            handleSelect={handleSelect}
          />
          <ToggleOptions monthlyOn={monthlyOn} handleToggle={handleToggle} />
        </S.Wrapper>
      </FormLayout>
      <NavigationLayout>
        <Button
          theme="default"
          text="Go Back"
          onClick={() => setCurrentStep(currentStep - 1)}
        />
        <Button theme="primary" text="Next Step" form="select-plan" />
      </NavigationLayout>
    </GS.Container>
  );
};