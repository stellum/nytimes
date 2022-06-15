// ADD CLIP
const INITIAL_CLIP = {
  clip: [],
};
export const addClipReducer = (state = INITIAL_CLIP, action) => {
  const { payload } = action;
  switch (action.type) {
    case 'ADD_CLIP':
      const newClip = {
        date: payload.date,
        headline: payload.headline,
        abstract: payload.abstract,
        _id: payload._id,
        web_url: payload.web_url,
      };

      return {
        clip: [...state.clip, newClip],
      };
    case 'UN_CLIP':
      return {
        clip: state.clip.filter((clipNews) => clipNews._id !== payload._id),
      };

    default:
      return state;
  }
};
