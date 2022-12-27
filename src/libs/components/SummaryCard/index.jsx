import PropTypes from "prop-types";
import * as S from "./styles.js";

export const SummaryCard = ({ plan, addons, monthOrYear, handleChange }) => {
  const { title, duration, price } = plan;

  return (
    <S.Container>
      <div className="header-card">
        <div className="header-left">
          <h1>
            {title} ({duration})
          </h1>
          <span onClick={handleChange}>Change</span>
        </div>
        <div className="header-right">
          <span>
            ${price}
            {monthOrYear}
          </span>
        </div>
      </div>

      {addons.length > 0 && <S.Subline />}
      <ul className="addOns-list">
        {addons.map(({ title, price }, index) => {
          return (
            <li className="item-list" key={index}>
              <span>{title}</span>
              <span>
                +{price}
                {monthOrYear}
              </span>
            </li>
          );
        })}
      </ul>
    </S.Container>
  );
};

SummaryCard.propTypes = {
  plan: PropTypes.shape({
    title: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  addons: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  monthOrYear: PropTypes.string.isRequired,
};
