// Search Data
const INITIAL_SEARCH_DATA = {
  docs: [],
};

export const addNewsRedcuer = (state = INITIAL_SEARCH_DATA, action) => {
  switch (action.type) {
    case 'ADD_NEWS':
      return {
        docs: [...action.payload],
      };

    default:
      return state;
  }
};
