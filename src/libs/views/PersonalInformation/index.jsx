import PropTypes from "prop-types";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { NavigationLayout } from "../../layouts/NavigationLayout";
import { FormLayout } from "../../layouts/FormLayout";
import { TextField } from "../../components/TextField";
import { Button } from "../../components/Button";
import { schema } from "./schema";
import * as GS from "../styles";
import * as S from "./styles";

export const PersonalInformation = ({
  currentStep,
  setCurrentStep,
  formData,
  setFormData,
}) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(({ name, email, phone }) => {
    setFormData({ ...formData, name: name, email: email, phone: phone });
    setCurrentStep(currentStep + 1);
  });

  useEffect(() => {
    reset({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    });
  }, []);

  return (
    <GS.Container>
      <FormLayout
        id="personal-information"
        onSubmit={onSubmit}
        title="Personal info"
        subtitle="Please provide your name, email address, and phone number."
      >
        <S.Wrapper>
          <TextField
            name={"name"}
            label="Name"
            placeholder="e.g. Stephen King"
            register={register}
            error={errors.name?.message}
          />

          <TextField
            name={"email"}
            label="Email Address"
            placeholder="e.g. stephenking@lorem.com"
            register={register}
            error={errors.email?.message}
          />
          <TextField
            name="phone"
            label="Phone Number"
            placeholder="e.g. +1 234 567 890"
            register={register}
            error={errors.phone?.message}
          />
        </S.Wrapper>
      </FormLayout>
      <NavigationLayout single>
        <Button theme="primary" text="Next Step" form="personal-information" />
      </NavigationLayout>
    </GS.Container>
  );
};

PersonalInformation.propTypes = {
  currentStep: PropTypes.number.isRequired,
  setCurrentStep: PropTypes.func.isRequired,
  setFormData: PropTypes.func.isRequired,
};
