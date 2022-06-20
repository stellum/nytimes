// Search Data
const INITIAL_SEARCH_DATA = {
  docs: [],
};

export const addNewsRedcuer = (state = INITIAL_SEARCH_DATA, action) => {
  switch (action.type) {
  case "ADD_NEWS":
    return {
      ...state,
      docs: [...action.payload],
    };

  default:
    return state;
  }
};
