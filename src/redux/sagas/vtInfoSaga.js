import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* vtInfoSaga() {
  yield takeLatest("GET_VT_DATA", getVTData);
  yield takeLatest('VT_REGISTER', addVetTech);

}


function* getVTData(action) {
  try {
    // const id = action.payload.id;
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

function* addVetTech(action) {
  try {
      yield axios.post('/api/vt', action.payload);
      console.log('-----> request this data from client', action.payload)
      yield put({
          type: 'GET_VT_DATA_SUCCESSFUL',
      });

  } catch (error) {
      console.log('Error with add vet tech:', error);
  }
}
export default vtInfoSaga;
