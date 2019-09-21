import { combineReducers } from "redux";
import healthCheck from "./healthCheck";
import header from "./header";

const rootReducer = combineReducers({
  header,
  healthCheck
});

export default rootReducer;
