import { combineReducers } from "redux";
import healthCheck from "./healthCheck";
import header from "./header";
import weatherForecast from "./weatherForecast";

const rootReducer = combineReducers({
  healthCheck,
  header,
  weatherForecast
});

export default rootReducer;
