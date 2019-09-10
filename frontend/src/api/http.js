import axios from "axios";

const getInstance = (contentType = null, acceptType = "application/json") => {
  const headers = {
    Accept: `${acceptType}; version=1`
  };

  if (contentType !== null) {
    headers["Content-Type"] = contentType;
  }

  // TODO: 環境ごとにbaseURLを環境変数として持つ
  return axios.create({
    baseURL: "http://localhost:3031/",
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

export const post = (path, params = null) => {
  return getInstance().post(path, params);
};

export function put(path, params) {
  return getInstance("application/json").put(path, params);
}

// TODO: 不要になったら削除する
export const getForHealthCheck = path => {
  return axios.get(`http://localhost${path}`);
};
