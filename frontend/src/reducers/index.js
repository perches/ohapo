import { combineReducers } from "redux";
import healthCheck from "./healthCheck";

const rootReducer = combineReducers({
  healthCheck,
});

export default rootReducer;
