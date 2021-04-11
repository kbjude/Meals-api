import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMealDetails } from '../api/fetchMeals.js';
import MealDetail from '../components/MealDetails.js';

function MealDetalsContainer({ match }) {
  const { mealDetails } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMealDetails(match.params.id));
  }, []);
  return (
    <>
      {mealDetails.details && mealDetails.details.map((meal) => (
        <MealDetail
          key={meal.idMeal}
          meal={meal}
        />
      ))}
    </>
  );
}

MealDetalsContainer.propTypes = {
  match: PropTypes.shape(
    { params: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired },
  ).isRequired,
};
export default MealDetalsContainer;
