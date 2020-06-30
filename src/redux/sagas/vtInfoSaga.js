import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* vtInfoSaga() {
  yield takeLatest("GET_VT_DATA", getVTData);
  yield takeLatest("GET_ALL_VT_DATA", getAllVtData);
  
}


function* getVTData(action) {
  try {
    // const id = action.payload.id;
    const response = yield axios.get(`/api/vt`);
    yield put({
      type: "GET_VT_DATA_SUCCESSFUL",
      payload: response.data[0],
    });
    console.log("here is data from vet_tech", response.data);
  } catch (error) {
    console.log("Error with get vet_tech data:", error);
  }
}

function* getAllVtData(action) {
  try {
    const response = yield axios.get(`/api/vt/all`);
    yield put({
      type: "GET_VT_DATA_SUCCESSFUL",
      payload: response.data,
    });
    console.log("ALL VT DATA", response.data);
  } catch (error) {
    console.log("Error with GET_ALL_VT_DATA:", error);
  }
}






export default vtInfoSaga;
