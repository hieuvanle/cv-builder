import { combineReducers } from "redux";
import infoFormReducer from "./infoFormReducer";

export default combineReducers({
  infoForm: infoFormReducer,
});
