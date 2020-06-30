import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";


function* clientServiceRequestSaga() {
  yield takeLatest("SET_CLIENT_SERVICE_REQUEST", setClientServiceRequest);
  yield takeLatest("GET_CLIENT_SERVICE_REQUEST", getClientServiceRequest);
  
}

//post service request Information
function* setClientServiceRequest(action) {
  console.log('client service request saga:::::', action.payload)
  try {
    yield axios.post('/api/request', action.payload);
    } catch (error) {
        console.log('Error with posting service request client:', error);
    }
}


//get client service request
function *getClientServiceRequest(action) {
  try {
    console.log('client service request get saga:::', action.payload.id)
    const id = action.payload.id;
    const response = yield axios.get(`/api/request/${id}`);
    yield put({
      type: "SET_CLIENT_SERVICE_REQUEST",
      payload: response.data,
    });
    console.log("here is data from client", response.data);
  } catch (error) {
    console.log("Error with get client info:", error);
  }
}

export default clientServiceRequestSaga;
