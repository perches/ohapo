import { getForHealthCheckWithAuth } from "./http";

const getHealthCheckWithAuth = () => getForHealthCheckWithAuth("/healthcheckWithAuth");

export default getHealthCheckWithAuth;
