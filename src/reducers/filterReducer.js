import { FILTER_BY_NAME } from '../actions/action.js';

const initialState = {
  filteredChars: [],
};

const filterReducer = (state = initialState, action) => {
  const charData = action.chars;
  let value = '';
  let filtered;
  switch (action.type) {
    case FILTER_BY_NAME:
      value = action.name.toLowerCase();
      if (value) {
        filtered = charData.filter((char) => char.strCategory.toLowerCase().includes(value));
      } else {
        filtered = [];
      }
      return {
        ...state,
        filteredChars: filtered,
      };
    default: return state;
  }
};

export default filterReducer;
