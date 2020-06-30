import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
// import { response } from "express";

function* clientInfoSaga() {
  yield takeLatest("GET_CLIENT_DATA", getClientInfo);
   yield takeLatest("UPDATE_CLIENT_DATA", updateClientData);
   yield takeLatest("UPDATE_CLIENT_PROFILE_PICTURE", updateClientProfilePicture);

}

function *getClientInfo() {
  try {
    const response = yield axios.get(`/api/client`);
    yield put({
      type: "SET_CLIENT_DATA",
      payload: response.data,
    });
    console.log("here is data from client", response.data);
  } catch (error) {
    console.log("Error with get client info:", error);
  }
}

// //Get client Dashboard Information
// function* getClientDashboard(action) {
//   try {
//     console.log('--------> from client  dashboard')
//     const clientResponse = yield axios.get(`/api/client`);
//      const petResponse = yield axios.get(`/api/pet`);
//     yield put({
//       type: "GET_CLIENT_DATA",
//       payload: clientResponse.data,
//     });
//     console.log("here is data from client", clientResponse.data);
//   } catch (error) {
//     console.log("Error with get client info:", error);
//   }
// }

function* updateClientData(action) {
      try {
      console.log('from in updateClientData', action.payload)
      const response = yield axios.put(`/api/client`, action.payload);
      yield put({
        type: "GET_CLIENT_DATA",
        payload: action.payload,
      });

      console.log("here is data from pet update", response.data);
    } catch (error) {
      console.log("Error with get pet data:", error);
    }
}

function* updateClientProfilePicture(action) {
  try {

    const data = new FormData();
    data.append('file', action.payload.file)
    
    console.log('from pet upload picture', action.payload)


    console.log('----------->formdata', action.payload.file.type);
    console.log('send this picture', action.payload);
    // const response = yield axios.put(`/api/pet/updateProfilePicture`, action.payload);
    const response = yield axios.put(`/api/client/updateProfilePicture`, data, {
      headers: {
        'accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
        'Content-Type': action.payload.file.type,
      }
    });
    console.log('send this clients picture to router', action.payload);

    yield put({
      type: "GET_CLIENT_DATA",
      payload: action.payload,
    });


  } catch (error) {
    console.log("Error with get client picture data:", error);
  }
}


export default clientInfoSaga;
