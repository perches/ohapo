import axios from "axios";

const getInstance = (
  baseURL = `${process.env.LOCALHOST_API_URL}`,
  contentType = null,
  acceptType = "application/json",
) => {
  const headers = {
    Accept: `${acceptType}; version=1`
  };

  if (contentType !== null) {
    headers["Content-Type"] = contentType;
  }

  // TODO: 環境ごとにbaseURLを環境変数として持つ
  return axios.create({
    baseURL: baseURL,
    headers: headers,
    responseType: "json"
  });
};

export const get = (path, params = null) => {
  let options = null;
  if (params) {
    options = { params };
  }
  return getInstance().get(path, options);
};

export const getForWeatherForecast = (path, params = null) => {
  let options = null;

  if (params) {
    options = { params };
  }

  return getInstance(
    `${process.env.OPEN_WEATHER_API_URL}?appid=${process.env.OPEN_WEATHER_API_KEY}`
  ).get(path, options);
};

export const getForNews = (path, params = null) => {
  let options = null;

  if (params) {
    options = { params };
  }

  return getInstance(
    `${process.env.NEWS_API_URL}?apiKey=${process.env.NEWS_API_KEY}`
  ).get(path, options);
};

export const post = (path, params = null) => {
  return getInstance().post(path, params);
};

export function put(path, params) {
  return getInstance("application/json").put(path, params);
}

// TODO: 不要になったら削除する
export const getForHealthCheck = path => {
  return axios.get(`${process.env.LOCALHOST_API_URL}${path}`);
};
