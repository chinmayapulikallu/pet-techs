import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* vetTechRegSaga() {
  yield takeLatest("VT_REGISTER", addVetTech);
}

// worker Saga: will be fired on "VT_REGISTER" actions
function* addVetTech(action) {
  try {

    
      const data = new FormData();
      data.append("file", action.payload.file);

      for (const [key, value] of Object.entries(action.payload.text)) {
        data.append(key, value);
      }
      console.log("----------->data", action.payload.file);
      console.log("----------->formdata", action.payload.file.type);
      console.log("send this client data to server", action.payload);

      let response = yield axios.post(`/api/vt`, data, action.payload, {
        headers: {
          accept: "application/json",
          "Accept-Language": "en-US,en;q=0.8",
          "Content-Type": action.payload.file.type,
        },
      });
    
    yield put({
      type: "GET_VT_DATA",
    });
  } catch (error) {
    console.log("Error with add vet tech:", error);
  }
}

export default vetTechRegSaga;
