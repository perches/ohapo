import { getForHealthCheck } from "./http";

const getHealthCheck = () => getForHealthCheck("/healthcheck");

export default getHealthCheck;
