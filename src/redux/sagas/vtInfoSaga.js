import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* vtInfoSaga() {
  yield takeLatest("GET_VT_DATA", getVTData);
  yield takeLatest("GET_SINGLE_VT_DATA", getSingleVTData)
  yield takeLatest("GET_ALL_VT_DATA", getAllVtData);
  yield takeLatest("UPDATE_VT_DATA", updateVTData); 
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
//GET VET INFO FOR PROFILE ON CLICK OF VIEW PROFILE FROM SERVICE PAGE 
function* getSingleVTData(action) {
  try {
    console.log("$$$$$$$$$$$$$", action.payload)
    const id = action.payload;
    const response = yield axios.get(`/api/vt/profile/${id}`);
    yield put({
      type: "GET_VT_DATA",
      // payload: response.data,
    });
    console.log("!!!!!!!!!!!!!!!", response.data);
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

function* updateVTData(action) {
  try {
    console.log("from in updateVTtData", action.payload);
    yield axios.put(`/api/vt`, action.payload);
    yield put({
      type: "GET_VT_DATA",
      payload: action.payload,
    });
  } catch (error) {
    console.log("Error with updating vt info:", error);
  }
}






export default vtInfoSaga;
