import { put, takeEvery } from "redux-saga/effects";
import {
  FETCH_HEALTH_CHECK,
  FETCH_HEALTH_CHECK_SUCCESS,
  FETCH_HEALTH_CHECK_ERROR
} from "../actions/fetchHealthCheck";
import getHealthCheck from "../api/getHealthCheck";

function* handleGetHealthCheck(action) {
  try {
    const resp = yield getHealthCheck(action.payload.params);
    yield put({
      type: FETCH_HEALTH_CHECK_SUCCESS,
      payload: {
        healthCheck: resp.data
      }
    });
  } catch (e) {
    yield put({ type: FETCH_HEALTH_CHECK_ERROR });
  }
}

function* healthCheckSaga() {
  yield takeEvery(FETCH_HEALTH_CHECK, handleGetHealthCheck);
}

export default healthCheckSaga;
