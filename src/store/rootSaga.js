import { all, call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  fetchPostsFailure,
  fetchPostsSuccess,
  fetchPostsRequest,
  fetchPostByIdRequest,
  fetchPostByIdSuccess,
  fetchPostByIdFailure,
} from "./slices/postsSlice";

function* fetchPostsSaga() {
  try {
    const response = yield call(() => axios.get("https://dummyjson.com/posts"));
    yield put(fetchPostsSuccess(response.data));
  } catch (error) {
    yield put(fetchPostsFailure(error.message));
  }
}

function* fetchPostByIdSaga(action) {
  try {
    const res = yield call(() =>
      axios.get(
        `https://jsonplaceholder.typicode.com/posts/${action.payload}`
      )
    );
    yield put(fetchPostByIdSuccess(res.data));
  } catch (error) {
    yield put(fetchPostByIdFailure(error.message));
  }
}


export default function* rootSaga() {
  yield all([takeLatest(fetchPostsRequest.type, fetchPostsSaga), takeLatest(fetchPostByIdRequest.type, fetchPostByIdSaga)]);
}
