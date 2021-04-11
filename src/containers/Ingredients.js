import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import fetchMealIngredients from '../api/fetchMealIngredients';
import Ingredient from '../components/Ingredient';

function Ingredients({ match }) {
  const { ingredient } = useSelector(state => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMealIngredients(match.params.name));
  }, []);

  return (
    <>
      {ingredient.ingredients && ingredient.ingredients.map(ingredient => (
        <Ingredient
          key={ingredient.idMeal}
          id={ingredient.idMeal}
          name={ingredient.strMeal}
          image={ingredient.strMealThumb}
          path={`/meals/${ingredient.strMeal}`}
        />
      ))}
    </>
  );
}

Ingredients.propTypes = {
  match: PropTypes.shape(
    { params: PropTypes.shape({ name: PropTypes.string.isRequired }).isRequired },
  ).isRequired,
};
export default Ingredients;
