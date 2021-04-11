import { FETCH_MEAL_DETAILS_SUCCESS, FETCH_MEAL_DETAILS_PENDING, FETCH_MEAL_DETAILS_ERROR } from '../actions/action';

export const initialState = {
  pending: false,
  details: [],
  error: null,
};

export function mealDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MEAL_DETAILS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_MEAL_DETAILS_SUCCESS:
      return {
        ...state,
        pending: false,
        details: action.details,
      };
    case FETCH_MEAL_DETAILS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export const getMealDetails = (state) => state.details;
export const getMealDetailssPending = (state) => state.pending;
export const getMealDetailsError = (state) => state.error;
