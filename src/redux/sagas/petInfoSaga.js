import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
// import { response } from "express";

function* petInfoSaga() {
  yield takeLatest("GET_PET_DATA", getPetData);
}

function* getPetData(action) {
  try {
    const id = action.payload;
    const response = yield axios.get(`/api/pet/${id}`);
    yield put({
      type: "GET_PET_DATA_SUCCESSFUL",
      payload: response.data,
    });
    console.log("here is data from pet", response.data);
  } catch (error) {
    console.log("Error with get pet data:", error);
  }
}
export default petInfoSaga;
