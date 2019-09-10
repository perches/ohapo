import {
  FETCH_HEALTH_CHECK,
  FETCH_HEALTH_CHECK_SUCCESS,
  FETCH_HEALTH_CHECK_ERROR
} from "../actions/fetchHealthCheck";

const initialState = {
  result: null,
  isLoading: false,
  error: false
};

export default function healthCheckReducer(state = initialState, action) {
  switch (action.type) {
  case FETCH_HEALTH_CHECK:
    return Object.assign({}, state, {
      isLoading: true,
    });
  case FETCH_HEALTH_CHECK_SUCCESS:
    return Object.assign({}, state, {
      result: action.payload.healthCheck.result,
      isLoading: false,
      error: false
    });
  case FETCH_HEALTH_CHECK_ERROR:
    return Object.assign({}, state, {
      isLoading: false,
      error: true
    });
  default:
    return state;
  }
}
