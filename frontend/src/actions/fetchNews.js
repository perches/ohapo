export const FETCH_NEWS = "FETCH_NEWS";
export const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
export const FETCH_NEWS_ERROR = "FETCH_NEWS_ERROR";

const fetchNews = params => ({
  type: FETCH_NEWS,
  payload: { params }
});

export default fetchNews;
