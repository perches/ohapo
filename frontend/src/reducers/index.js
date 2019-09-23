import { combineReducers } from "redux";
import healthCheck from "./healthCheck";
import header from "./header";
import weatherForecast from "./weatherForecast";
import news from "./news";

const rootReducer = combineReducers({
  healthCheck,
  header,
  weatherForecast,
  news
});

export default rootReducer;
