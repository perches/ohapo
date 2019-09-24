import { getForWeatherForecast } from "./http";

const getWeatherForecast = params => getForWeatherForecast(null, params);

export default getWeatherForecast;
