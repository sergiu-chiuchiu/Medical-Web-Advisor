import { RSS_FEED_HANDLE_SEARCH_QUERY } from "./ActionTypes";

export const rssFeedHandleSearch = payload => {
  return {
    type: RSS_FEED_HANDLE_SEARCH_QUERY,
    payload: { rssFeedSearchQuery: payload.target.value }
  };
};
