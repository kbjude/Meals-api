import { FETCH_MEALS_PENDING, FETCH_MEALS_SUCCESS, FETCH_MEALS_ERROR } from '../actions/action';

export const initialState = {
  pending: false,
  meals: [],
  error: null,
};

export function mealsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MEALS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_MEALS_SUCCESS:
      return {
        ...state,
        pending: false,
        meals: action.meals,
      };
    case FETCH_MEALS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export const getMeals = (state) => state.meals;
export const getMealsPending = (state) => state.pending;
export const getMealsError = (state) => state.error;
