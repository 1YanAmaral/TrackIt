import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function login(body) {
  const promise = axios.post(`${BASE_URL}/auth/login`, body);
  return promise;
}

function signup(body) {
  const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);
  return promise;
}

function createHabit(body, config) {
  const promise = axios.post(`${BASE_URL}/habits`, body, config);
  return promise;
}

function getHabits(config) {
  const promise = axios.get(`${BASE_URL}/habits`, config);
  return promise;
}

export { login, signup, createHabit, getHabits };
