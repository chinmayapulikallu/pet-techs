import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
// import { response } from "express";

function* clientInfoSaga() {
  yield takeLatest("GET_CLIENT_DATA", getClientInfo);
  yield takeLatest("UPDATE_CLIENT_DATA", updateClientData);
}

function* getClientInfo(action) {
  try {
    const response = yield axios.get(`/api/client`);
    yield put({
      type: "SET_CLIENT_DATA",
      payload: response.data,
    });
  } catch (error) {
    console.log("Error with get client info:", error);
  }
}

function* updateClientData(action) {
    try {
      
      const response = yield axios.put(`/api/client`, action.payload);
      yield put({
        type: "GET_CLIENT_DATA",
        payload: action.payload,
      });

    } catch (error) {
      console.log("Error with get pet data:", error);
    }
  }
export default clientInfoSaga;
