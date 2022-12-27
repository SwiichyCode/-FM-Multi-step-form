import PropTypes from "prop-types";
import { Checkbox } from "../Checkbox";
import * as S from "./styles.js";

export const CheckboxCard = ({ checked, title, subtitle, price, ...props }) => {
  return (
    <S.Container checked={checked}>
      <div className="left-side">
        <label>
          <Checkbox checked={checked} {...props} />
        </label>
        <div className="title">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>
      </div>
      <div className="rigth-side">
        <span>{price}</span>
      </div>
    </S.Container>
  );
};

CheckboxCard.propTypes = {
  checked: PropTypes.bool,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
