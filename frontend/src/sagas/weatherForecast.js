import { put, takeEvery } from "redux-saga/effects";
import {
  FETCH_WEATHER_FORECAST,
  FETCH_WEATHER_FORECAST_SUCCESS,
  FETCH_WEATHER_FORECAST_ERROR
} from "../actions/fetchWeatherForecast";
import getWeatherForecast from "../api/getWeatherForecast";

function* handleGetWeatherForecast(action) {
  try {
    const resp = yield getWeatherForecast(action.payload.params);
    yield put({
      type: FETCH_WEATHER_FORECAST_SUCCESS,
      payload: {
        weatherForecast: resp.data
      }
    });
  } catch (e) {
    yield put({ type: FETCH_WEATHER_FORECAST_ERROR });
  }
}

function* weatherForecastSaga() {
  yield takeEvery(FETCH_WEATHER_FORECAST, handleGetWeatherForecast);
}

export default weatherForecastSaga;
