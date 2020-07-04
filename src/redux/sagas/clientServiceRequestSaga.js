import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";


function* clientServiceRequestSaga() {
  yield takeLatest("SET_CLIENT_SERVICE_REQUEST", setClientServiceRequest);
  yield takeLatest("GET_CLIENT_SERVICE_REQUEST", getClientServiceRequest); 
  yield takeLatest("GET_VT_SERVICE_REQUEST", getVTServiceRequest);
  yield takeLatest("ACCEPT_REQ", acceptServiceRequest);  
  yield takeLatest("DECLINE_REQ", declineServiceRequest);
}

function* acceptServiceRequest(action) {
  try {
    yield axios.put(`/api/request`, action.payload);
  } catch (error) {
    console.log("Error accepting service request", error);
  }
}

function* declineServiceRequest(action) {
  try {
    yield axios.put(`/api/request`, action.payload);
  } catch (error) {
    console.log("Error declining service request", error);
  }
}

//post service request Information
function* setClientServiceRequest(action) {
  console.log('client service request saga:::::', action.payload)
  try {
    yield axios.post('/api/request/client', action.payload);
    } catch (error) {
        console.log('Error with posting service request client:', error);
    }
}


//get client service request
function *getClientServiceRequest() {
  try {
    // console.log('client service request get saga:::', action.payload.id)
    // const id = action.payload.id;
    const response = yield axios.get(`/api/request/client`);
    console.log('client request response::::::==>', response.data)
    yield put({
      type: "SET_CLIENT_REQUEST",
      payload: response.data,
    });
    console.log("here is data from client", response.data);
  } catch (error) {
    console.log("Error with get client info:", error);
  }
}

//Get service request for Vet Tech
function* getVTServiceRequest() {
  try {
    // console.log('client service request get saga:::', action.payload.id)
    // const id = action.payload.id;
    console.log("in getVTServiceRequest ------")
    const response = yield axios.get(`/api/request/vt`);
    console.log('client request response::::::==>', response.data)
    yield put({
      type: "SET_VT_REQUEST",
      payload: response.data,
    });
    console.log("here is data from client", response.data);
  } catch (error) {
    console.log("Error with get client info:", error);
  }
}


export default clientServiceRequestSaga;
