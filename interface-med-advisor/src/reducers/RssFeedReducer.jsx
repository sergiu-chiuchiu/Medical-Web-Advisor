import { RSS_FEED_HANDLE_SEARCH_QUERY } from "../actions/ActionTypes";

const initialState = {
    rssFeedSearchQuery: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case RSS_FEED_HANDLE_SEARCH_QUERY:
      return { ...state, ...payload };

    default:
      return state;
  }
};
