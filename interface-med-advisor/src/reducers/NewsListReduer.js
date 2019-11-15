const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "1":
      return { ...state, ...payload };

    default:
      return state;
  }
};
