import { RSS_FEED_HANDLE_SEARCH_QUERY } from "./ActionTypes";

export const rssFeedHandleSearch = payload => {
  console.log("fgdsgndfkjghdfks", payload.target.value);

  return {
    type: RSS_FEED_HANDLE_SEARCH_QUERY,
    payload: { rssFeedSearchQuery: payload.target.value }
  };
};
