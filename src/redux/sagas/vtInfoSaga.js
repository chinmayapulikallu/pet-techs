import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* vtInfoSaga() {
  yield takeLatest("GET_VT_DATA", getVTData);
  yield takeLatest("GET_ALL_VT_DATA", getAllVtData);
  yield takeLatest("UPDATE_VT_DATA", updateVTData);
  yield takeLatest("UPDATE_VT_PROFILE_PICTURE", updateVTProfilePicture);

}

function* getVTData(action) {
  try {
    // const id = action.payload.id;
    const response = yield axios.get(`/api/vt`);
    yield put({
      type: "GET_VT_DATA_SUCCESSFUL",
      payload: response.data,
    });
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
  } catch (error) {
    console.log("Error with GET_ALL_VT_DATA:", error);
  }
}

function* updateVTData(action) {
  try {
    yield axios.put(`/api/vt`, action.payload);
    yield put({
      type: "GET_VT_DATA",
      payload: action.payload,
    });
  } catch (error) {
    console.log("Error with updating vt info:", error);
  }
}

function* updateVTProfilePicture(action) {
  try {

    const data = new FormData();
    data.append('file', action.payload.file)
    
    console.log('from pet upload picture', action.payload)


    console.log('----------->formdata', action.payload.file.type);
    console.log('send this picture', action.payload);
    // const response = yield axios.put(`/api/pet/updateProfilePicture`, action.payload);
    const response = yield axios.put(`/api/vt/updateProfilePicture`, data, {
      headers: {
        'accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
        'Content-Type': action.payload.file.type,
      }
    });
    console.log('send this vt picture to router', action.payload);

    yield put({
      type: "GET_VT_DATA",
      payload: action.payload,
    });


  } catch (error) {
    console.log("Error with get vt picture data:", error);
  }
}

export default vtInfoSaga;
