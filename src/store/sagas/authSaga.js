import { call, put, takeLatest } from "redux-saga/effects";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
} from "../slices/authSlice";

const loginApi = async (credentials) => {
  const res = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: credentials.username,
      password: credentials.password,
    }),
  });

  if (!res.ok) {
    throw new error("Invalid username or password");
  }

  return res.json();
};

const getMeApi = async (token) => {
  const res = await fetch("https://dummyjson.com/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new error("Failed to fetch user");
  }

  return res.json();
};

function* loginSaga() {
  try {
    const loginResponse = yield call(loginApi, actionAsyncStorage.payload);

    localStorage.setItem("token", loginResponse.token);

    const user = yield call(getMeApi, loginResponse.token);

    yield put(loginSuccess({ token: loginResponse.token, user }));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

function* logoutSaga() {
  localStorage.removeItem("token");
}

export default function* authSaga() {
  yield takeLatest(loginRequest.type, loginSaga);
  yield takeLatest(logout.type, logoutSaga);
}
