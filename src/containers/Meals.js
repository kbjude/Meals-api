import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import fetchMeals from '../api/fetchMeals';
import Meal from '../components/Meal';

function Meals({ match }) {
  const { data } = useSelector(state => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMeals(match.params.name));
  }, []);
  return (
    <>
      {data.meals && data.meals.map(meal => (
        <Meal
          key={meal.idMeal}
          id={meal.idMeal}
          name={meal.strMeal}
          image={meal.strMealThumb}
          path={`/meals/details/${meal.idMeal}`}
        />
      ))}
    </>
  );
}

Meals.propTypes = {
  match: PropTypes.shape(
    { params: PropTypes.shape({ name: PropTypes.string.isRequired }).isRequired },
  ).isRequired,
};
export default Meals;
