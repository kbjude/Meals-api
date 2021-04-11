import { fetchCategoriesPending, fetchCategoriesSuccess, fetchCategoriesError } from '../actions/action';

function fetchCategories() {
  return (dispatch) => {
    dispatch(fetchCategoriesPending());
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(fetchCategoriesSuccess(res.categories));
        return res.categories;
      })
      .catch((error) => {
        dispatch(fetchCategoriesError(error));
      });
  };
}

export default fetchCategories;
