import { combineReducers } from "redux";
import infoFormReducer from "./infoFormReducer";
import detailsFormReducer from "./detailsFormReducer";
import authReducer from "./authReducer";

export default combineReducers({
  infoForm: infoFormReducer,
  detailsForm: detailsFormReducer,
  auth: authReducer,
});
