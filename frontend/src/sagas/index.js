import { all } from "redux-saga/effects";
import healthCheckSaga from "./healthCheck";
import weatherForecastSaga from "./weatherForecast";

export default function* rootSaga() {
  yield all([healthCheckSaga(), weatherForecastSaga()]);
}
