import {
  fetchMealsPending,
  fetchMealsSuccess,
  fetchMealsError,
  fetchMealDetailsPending,
  fetchMealDetailsSuccess,
  fetchMealDetailsError,
} from '../actions/action';

function fetchMeals(strCategory) {
  const category = strCategory;
  return dispatch => {
    dispatch(fetchMealsPending());
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(fetchMealsSuccess(res.meals));
      })
      .catch(error => {
        dispatch(fetchMealsError(error));
      });
  };
}

export function fetchMealDetails(id) {
  return dispatch => {
    dispatch(fetchMealDetailsPending());
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(fetchMealDetailsSuccess(res.meals));
      })
      .catch(error => {
        dispatch(fetchMealDetailsError(error));
      });
  };
}

export default fetchMeals;
