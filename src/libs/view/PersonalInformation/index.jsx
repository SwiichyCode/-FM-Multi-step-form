import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Navigation } from "../../layouts/Navigation";
import { Form } from "../../layouts/Form";
import { TextField } from "../../components/TextField";
import { Button } from "../../components/Button";
import { schema } from "./schema";

export const PersonalInformation = ({
  currentStep,
  setCurrentStep,
  setFormData,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    setFormData(data);
    setCurrentStep(currentStep + 1);
  });

  return (
    <Container>
      <Form
        id="personal-information"
        onSubmit={onSubmit}
        title="Personal info"
        subtitle="Please provide your name, email address, and phone number."
      >
        <div className="form-body">
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
        </div>
      </Form>
      <Navigation single>
        <Button theme="primary" text="Next Step" form="personal-information" />
      </Navigation>
    </Container>
  );
};

// Mobile view
const Container = styled.div`
  position: absolute;
  top: 99px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: calc(100vh - 99px); // remove

  .form-body {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;
