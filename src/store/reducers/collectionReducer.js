const initialState = {
  collections: [],
};

const collectionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_COLLECTIONS":
      return {
        ...state,
        collections: payload,
      };

    default:
      return state;
  }
};

export default collectionReducer;
