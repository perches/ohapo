import { put, takeEvery } from "redux-saga/effects";
import {
  FETCH_NEWS,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_ERROR
} from "../actions/fetchNews";
import getNews from "../api/getNews";

function* handleGetNews(action) {
  try {
    const resp = yield getNews(action.payload.params);
    yield put({
      type: FETCH_NEWS_SUCCESS,
      payload: {
        news: resp.data
      }
    });
  } catch (e) {
    yield put({ type: FETCH_NEWS_ERROR });
  }
}

function* newsSaga() {
  yield takeEvery(FETCH_NEWS, handleGetNews);
}

export default newsSaga;
