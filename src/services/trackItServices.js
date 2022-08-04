import axios from "axios";

const BASE_URL =
  "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth";

function login(body) {
  const promise = axios.post(`${BASE_URL}/login`, body);
  return promise;
}

function signup(body) {
  const promise = axios.post(`${BASE_URL}/sign-up`, body);
  return promise;
}

function createHabit(body, config) {
  const promise = axios.post(`${BASE_URL}/habits`);
  return promise;
}

function getHabits(config) {
  const promise = axios.get(
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/",
    config
  );
  return promise;
}

export { login, signup, createHabit, getHabits };
