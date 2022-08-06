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
function createHeader(token) {
  const auth = token;
  const config = {
    headers: {
      Authorization: `Bearer ${auth}`,
    },
  };
  console.log(config);
  return config;
}

function createHabit(body, config) {
  const promise = axios.post(`${BASE_URL}/habits`, body, config);
  return promise;
}

function getHabits(config) {
  const promise = axios.get(`${BASE_URL}/habits`, config);
  return promise;
}

function getToday(config) {
  const promise = axios.get(`${BASE_URL}/habits/today`, config);
  return promise;
}

function checkHabit(habitId, config) {
  const promise = axios.post(`${BASE_URL}/habits/${habitId}/check`, {}, config);
  return promise;
}

function uncheckHabit(habitId, config) {
  const promise = axios.post(
    `${BASE_URL}/habits/${habitId}/uncheck`,
    {},
    config
  );
  return promise;
}

function deleteHabit(body, habitId) {
  const promise = axios.delete(`${BASE_URL}/habits/${habitId}`, body);
  return promise;
}

export {
  login,
  signup,
  createHabit,
  getHabits,
  createHeader,
  getToday,
  checkHabit,
  uncheckHabit,
  deleteHabit,
};
