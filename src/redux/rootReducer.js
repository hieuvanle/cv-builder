import { combineReducers } from "redux";
import infoFormReducer from "./infoFormReducer";
import detailsFormReducer from "./detailsFormReducer";

export default combineReducers({
  infoForm: infoFormReducer,
  detailsForm: detailsFormReducer,
});
