export const FETCH_WEATHER_FORECAST = "FETCH_WEATHER_FORECAST";
export const FETCH_WEATHER_FORECAST_SUCCESS = "FETCH_WEATHER_FORECAST_SUCCESS";
export const FETCH_WEATHER_FORECAST_ERROR = "FETCH_WEATHER_FORECAST_ERROR";

const fetchWeatherForecast = params => ({
  type: FETCH_WEATHER_FORECAST,
  payload: { params }
});

export default fetchWeatherForecast;
