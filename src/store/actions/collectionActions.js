import axios from "axios";

export const getCollections = (programType) => (dispatch) => {
  axios.get(`/entries?programType=${programType}`).then((response) =>
    dispatch({
      type: "SET_COLLECTIONS",
      payload: response.data,
    })
  );
};
