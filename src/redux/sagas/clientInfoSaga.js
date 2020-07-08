import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* clientInfoSaga() {
  yield takeLatest("GET_CLIENT_DATA", getClientInfo);
  yield takeLatest("UPDATE_CLIENT_DATA", updateClientData);
  yield takeLatest("UPDATE_CLIENT_PROFILE_PICTURE", updateClientProfilePicture);
}

function* getClientInfo() {
  try {
    const response = yield axios.get(`/api/client`);
    yield put({
      type: "SET_CLIENT_DATA",
      payload: response.data,
    });
  } catch (error) {
    console.log("Error with get client data:", error);
  }
}

function* updateClientData(action) {
  try {
    yield axios.put(`/api/client`, action.payload);
    yield put({
      type: "GET_CLIENT_DATA",
      payload: action.payload,
    });
  } catch (error) {
    console.log("Error with get client data:", error);
  }
}

function* updateClientProfilePicture(action) {
  try {
    const data = new FormData();
    data.append("file", action.payload.file);
    yield axios.put(`/api/client/updateProfilePicture`, data, {
      headers: {
        accept: "application/json",
        "Accept-Language": "en-US,en;q=0.8",
        "Content-Type": action.payload.file.type,
      },
    });

    yield put({
      type: "GET_CLIENT_DATA",
      payload: action.payload,
    });
  } catch (error) {
    console.log("Error with get client picture data:", error);
  }
}

export default clientInfoSaga;
