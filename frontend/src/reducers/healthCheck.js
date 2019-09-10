import {
  FETCH_HEALTH_CHECK,
  FETCH_HEALTH_CHECK_SUCCESS,
  FETCH_HEALTH_CHECK_ERROR
} from "../actions/fetchHealthCheck";

const initialState = {
  healthCheck: null,
  isLoading: false,
  error: false,
  initialDisplayFlag: true
};

export default function healthCheckReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_HEALTH_CHECK:
      return Object.assign({}, state, {
        isLoading: true,
        initialDisplayFlag: false
      });
    case FETCH_HEALTH_CHECK_SUCCESS:
      return Object.assign({}, state, {
        healthCheck: action.payload,
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
