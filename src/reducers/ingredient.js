import { FETCH_INGREDIENT_PENDING, FETCH_INGREDIENT_SUCCESS, FETCH_INGREDIENT_ERROR } from '../actions/action';

export const initialState = {
  pending: false,
  ingredients: [],
  error: null,
};

export function ingredientsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_INGREDIENT_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_INGREDIENT_SUCCESS:
      return {
        ...state,
        pending: true,
        ingredients: action.ingredients,
      };
    case FETCH_INGREDIENT_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export const getIngredients = state => state.ingredients;
export const getIngredientsPending = state => state.pending;
export const getIngredientsError = state => state.error;
