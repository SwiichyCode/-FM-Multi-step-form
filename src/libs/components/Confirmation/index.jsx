import PropTypes from "prop-types";
import { Button } from "../Button";
import IconThankYou from "../../../assets/images/icon-thank-you.svg";
import * as S from "./styles.js";

export const Confirmation = ({ handleReset }) => {
  return (
    <S.Container>
      <img src={IconThankYou} />
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
      <Button text="Go Back" theme="default" onClick={handleReset} />
    </S.Container>
  );
};

Confirmation.propTypes = {
  handleReset: PropTypes.func.isRequired,
};
