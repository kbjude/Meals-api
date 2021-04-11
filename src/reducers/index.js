import { combineReducers } from 'redux';
import { mealsReducer } from './data';
import { categoriesReducer } from './category';
import { ingredientsReducer } from './ingredient';
import { mealDetailsReducer } from './mealDetails';
import offsetReducer from './offset';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  data: mealsReducer,
  category: categoriesReducer,
  ingredient: ingredientsReducer,
  mealDetails: mealDetailsReducer,
  filter: filterReducer,
  offset: offsetReducer,
});

export default rootReducer;
