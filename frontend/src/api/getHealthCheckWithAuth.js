import { getForHealthCheckWithAuth } from "./http";

const getHealthCheckWithAuth = () => getForHealthCheckWithAuth("/healthcheck");

export default getHealthCheckWithAuth;
