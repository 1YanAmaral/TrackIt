import axios from "axios";

const BASE_URL =
  "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth";

function login(obj) {
  const promise = axios.post(`${BASE_URL}/login`, obj);
  return promise;
}

export { login };
