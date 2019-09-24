import {
  FETCH_WEATHER_FORECAST,
  FETCH_WEATHER_FORECAST_SUCCESS,
  FETCH_WEATHER_FORECAST_ERROR
} from "../actions/fetchWeatherForecast";

const initialState = {
  weatherForecast: null,
  isLoading: false,
  error: false
};

export default function weatherForecastReducer(state = initialState, action) {
  switch (action.type) {
  case FETCH_WEATHER_FORECAST:
    return Object.assign({}, state, {
      isLoading: true
    });
  case FETCH_WEATHER_FORECAST_SUCCESS:
    return Object.assign({}, state, {
      weatherForecast: action.payload.weatherForecast,
      isLoading: false,
      error: false
    });
  case FETCH_WEATHER_FORECAST_ERROR:
    return Object.assign({}, state, {
      isLoading: false,
      error: true
    });
  default:
    return state;
  }
}
