import PropTypes from "prop-types";
import { useState, useEffect, useMemo } from "react";
import { FormLayout } from "../../layouts/FormLayout";
import { NavigationLayout } from "../../layouts/NavigationLayout";
import { CheckboxCard } from "../../components/CheckboxCard";
import { Button } from "../../components/Button";
import { initialStateAddons } from "./stores";
import * as GS from "../styles";
import * as S from "./styles";

export const PickAddons = ({
  currentStep,
  setCurrentStep,
  formData,
  setFormData,
}) => {
  const [addons, setAddons] = useState(initialStateAddons);
  const duration = formData.plan.duration;

  const handleOnChange = (index) => {
    const updatedData = addons.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          checked: !item.checked,
        };
      }
      return item;
    });
    setAddons(updatedData);
  };

  const calculatePrice = (item, duration) => {
    return duration === "monthly" ? item.price : item.price * 10;
  };

  if (formData.addons) {
    const updatedData = useMemo(() => {
      return addons.map((item) => {
        const isChecked = formData.addons.some(
          (addon) => addon.title === item.title
        );
        return {
          ...item,
          price: calculatePrice(item, duration),
          checked: isChecked,
        };
      });
    }, []);

    useEffect(() => {
      setAddons(updatedData);
    }, [updatedData]);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const selectedAddOns = addons.filter((item) => item.checked);
    setFormData({
      ...formData,
      addons: selectedAddOns,
    });
    setCurrentStep(currentStep + 1);
  };

  return (
    <GS.Container>
      <FormLayout
        id="pick-addons"
        onSubmit={onSubmit}
        title="Pick add-ons"
        subtitle="Add-ons help enhance your gaming experience."
      >
        <S.Wrapper>
          {addons.map((item, index) => {
            return (
              <CheckboxCard
                checked={item.checked}
                onChange={() => handleOnChange(index)}
                title={item.title}
                subtitle={item.subtitle}
                price={
                  duration === "monthly"
                    ? `+${item.price}/mo`
                    : `+${item.price}/yr`
                }
                key={index}
              />
            );
          })}
        </S.Wrapper>
      </FormLayout>
      <NavigationLayout>
        <Button
          theme="default"
          text="Go Back"
          onClick={() => setCurrentStep(currentStep - 1)}
        />
        <Button theme="primary" text="Next Step" form="pick-addons" />
      </NavigationLayout>
    </GS.Container>
  );
};

PickAddons.propTypes = {
  currentStep: PropTypes.number.isRequired,
  setCurrentStep: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
};
