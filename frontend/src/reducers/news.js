import {
  FETCH_NEWS,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_ERROR
} from "../actions/fetchNews";

const initialState = {
  news: null,
  isLoading: false,
  error: false
};

export default function newsReducer(state = initialState, action) {
  switch (action.type) {
  case FETCH_NEWS:
    return Object.assign({}, state, {
      isLoading: true
    });
  case FETCH_NEWS_SUCCESS:
    return Object.assign({}, state, {
      news: action.payload.news,
      isLoading: false,
      error: false
    });
  case FETCH_NEWS_ERROR:
    return Object.assign({}, state, {
      isLoading: false,
      error: true
    });
  default:
    return state;
  }
}
