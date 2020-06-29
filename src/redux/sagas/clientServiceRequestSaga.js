import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";


function* clientServiceRequestSaga() {
  yield takeLatest("SET_CLIENT_SERVICE_REQUEST", setClientServiceRequest);
  
}

//Get Client Information
function* setClientServiceRequest(action) {
  console.log('client service request saga:::::', action.payload)
  try {
    yield axios.post('/api/request', action.payload);
    } catch (error) {
        console.log('Error with posting service request client:', error);
    }
}



export default clientServiceRequestSaga;
