export const FETCH_HEALTH_CHECK = "FETCH_HEALTH_CHECK";
export const FETCH_HEALTH_CHECK_SUCCESS = "FETCH_HEALTH_CHECK_SUCCESS";
export const FETCH_HEALTH_CHECK_ERROR = "FETCH_HEALTH_CHECK_ERROR";

const fetchHealthCheck = params => ({
  type: FETCH_HEALTH_CHECK,
  payload: { params }
});

export default fetchHealthCheck;
