import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* clientServiceRequestSaga() {
  yield takeLatest("SET_CLIENT_SERVICE_REQUEST", setClientServiceRequest);
  yield takeLatest("GET_CLIENT_SERVICE_REQUEST", getClientServiceRequest);
  yield takeLatest("GET_VT_SERVICE_REQUEST", getVTServiceRequest);
  yield takeLatest("ACCEPT/DECLINE_REQ", acceptDeclineServiceRequest);
}

//PUT for accepting or declining service request
function* acceptDeclineServiceRequest(action) {
  try {
    yield axios.put(`/api/request`, action.payload);
  } catch (error) {
    console.log("Error accepting service request", error);
  }
}

//post service request Information
function* setClientServiceRequest(action) {
  try {
    yield axios.post("/api/request/client", action.payload);
  } catch (error) {
    console.log("Error with posting service request client:", error);
  }
}

//get client service request
function* getClientServiceRequest() {
  try {
    const response = yield axios.get(`/api/request/client`);
    yield put({
      type: "SET_CLIENT_REQUEST",
      payload: response.data,
    });
  } catch (error) {
    console.log("Error with get client info:", error);
  }
}

//Get service request for Vet Tech
function* getVTServiceRequest() {
  try {
    const response = yield axios.get(`/api/request/vt`);
    yield put({
      type: "SET_VT_REQUEST",
      payload: response.data,
    });
  } catch (error) {
    console.log("Error with get client info:", error);
  }
}

export default clientServiceRequestSaga;
