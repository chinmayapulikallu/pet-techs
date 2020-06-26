import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* vtInfoSaga() {
  yield takeLatest("GET_VT_DATA", getVTData);
}

function* getVTData(action) {
  try {
    const response = yield axios.get(`/api/vt`);
    yield put({
      type: "GET_VT_DATA_SUCCESSFUL",
      payload: response.data,
    });
    console.log("here is data from vet_tech", response.data);
  } catch (error) {
    console.log("Error with get vet_tech data:", error);
  }
}
export default vtInfoSaga;
