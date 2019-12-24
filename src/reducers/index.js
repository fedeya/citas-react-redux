import { combineReducers } from "redux";
import citasReducers from "./citasReducer";
import validacionReducer from "./validacionReducer";

export default combineReducers({
  citas: citasReducers,
  error: validacionReducer
});