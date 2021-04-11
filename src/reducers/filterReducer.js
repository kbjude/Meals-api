import { FILTER_BY_NAME } from '../actions/action';

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
        console.log('This is the data', charData);
        filtered = charData.filter(char => char.strCategory.toLowerCase().includes(value));
        console.log('This is the value', filtered);
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
