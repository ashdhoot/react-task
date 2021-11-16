import { combineReducers } from "redux";
import collectionReducer from "./collectionReducer";

export default combineReducers({
  collection: collectionReducer,
});
