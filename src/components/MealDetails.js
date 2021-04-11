import React from 'react';
import PropTypes from 'prop-types';

const MealDetail = ({
  meal,
}) => (
  <>
    <h1>
      { meal.strMeal }
      &nbsp;
      No.
      { meal.idMeal }
    </h1>
    <span>
      <h4> Category </h4>
      { meal.strCategory }
      {' '}
    </span>
    <span>
      <h4> Ingredients </h4>
      <ul>
        <li>
          { meal.strIngredient1 }
        </li>
        <li>
          { meal.strIngredient2 }
        </li>
        <li>
          { meal.strIngredient3 }
        </li>
        <li>
          { meal.strIngredient4 }
        </li>
        <li>
          { meal.strIngredient6 }
        </li>
        <li>
          { meal.strIngredient7 }
        </li>
        <li>
          { meal.strIngredient8 }
        </li>
        <li>
          { meal.strIngredient9 }
        </li>
        <li>
          { meal.strIngredient10 }
        </li>
        <li>
          { meal.strIngredient11 }
        </li>
        <li>
          { meal.strIngredient12 }
        </li>
      </ul>
    </span>
    <span>
      <h4> Measures </h4>
      <ul>
        <li>
          Measure1: &nbsp;
          { meal.strMeasure1 }
        </li>
        <li>
          Measure2: &nbsp;
          { meal.strMeasure2 }
        </li>
        <li>
          Measure3: &nbsp;
          { meal.strMeasure3 }
        </li>
        <li>
          Measure4: &nbsp;
          { meal.strMeasure4 }
        </li>
        <li>
          Measure5: &nbsp;
          { meal.strMeasure5 }
        </li>
        <li>
          Measure6: &nbsp;
          { meal.strMeasure6 }
        </li>
        <li>
          Measure7: &nbsp;
          { meal.strMeasure7 }
        </li>
        <li>
          Measure8: &nbsp;
          { meal.strMeasure8 }
        </li>
        <li>
          Measure9: &nbsp;
          { meal.strMeasure9 }
        </li>
        <li>
          Measure10: &nbsp;
          { meal.strMeasure10 }
        </li>
        <li>
          Measure11: &nbsp;
          { meal.strMeasure11 }
        </li>
      </ul>
    </span>
    <span>

      <h4> Instructions for Preparation </h4>
      { meal.strInstructions }
      {' '}
    </span>
  </>
);

MealDetail.propTypes = {
  meal: PropTypes.shape({
    idMeal: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
    strInstructions: PropTypes.string.isRequired,
    strCategory: PropTypes.string.isRequired,
    strTags: PropTypes.string.isRequired,
    strIngredient1: PropTypes.string.isRequired,
    strIngredient2: PropTypes.string.isRequired,
    strIngredient3: PropTypes.string.isRequired,
    strIngredient4: PropTypes.string.isRequired,
    strIngredient5: PropTypes.string.isRequired,
    strIngredient6: PropTypes.string.isRequired,
    strIngredient7: PropTypes.string.isRequired,
    strIngredient8: PropTypes.string.isRequired,
    strIngredient9: PropTypes.string.isRequired,
    strIngredient10: PropTypes.string.isRequired,
    strIngredient11: PropTypes.string.isRequired,
    strIngredient12: PropTypes.string.isRequired,
    strMeasure1: PropTypes.string.isRequired,
    strMeasure2: PropTypes.string.isRequired,
    strMeasure3: PropTypes.string.isRequired,
    strMeasure4: PropTypes.string.isRequired,
    strMeasure5: PropTypes.string.isRequired,
    strMeasure6: PropTypes.string.isRequired,
    strMeasure7: PropTypes.string.isRequired,
    strMeasure8: PropTypes.string.isRequired,
    strMeasure9: PropTypes.string.isRequired,
    strMeasure10: PropTypes.string.isRequired,
    strMeasure11: PropTypes.string.isRequired,
    strMeasure12: PropTypes.string.isRequired,
    strMeasure13: PropTypes.string.isRequired,
  }).isRequired,
};

export default MealDetail;
