// ADD CLIP
const INITIAL_CLIP = {
  clip: [],
};
export const addClipReducer = (state = INITIAL_CLIP, action) => {
  const { payload } = action;
  switch (action.type) {
    case 'ADD_CLIP':
      return {
        ...state,
        clip: [...state.clip, payload],
      };
    case 'UN_CLIP':
      return {
        ...state,
        clip: state.clip.filter((clipNews) => clipNews._id !== payload._id),
      };

    default:
      return state;
  }
};
