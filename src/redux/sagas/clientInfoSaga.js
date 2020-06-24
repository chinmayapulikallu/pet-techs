import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
// import { response } from "express";

function* clientInfoSaga() {
  yield takeLatest("GET_CLIENT_DATA", getClientInfo);
}

function* getClientInfo(action) {
  try {
    const id = action.payload;
    const response = yield axios.get(`/api/client/${id}`);
    yield put({
      type: "SET_CLIENT_DATA",
      payload: response.data,
    });
    console.log("here is data from client", response.data);
  } catch (error) {
    console.log("Error with get client info:", error);
  }
}
export default clientInfoSaga;
