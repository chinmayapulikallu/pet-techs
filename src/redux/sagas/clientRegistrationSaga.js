import { put, takeLatest, select } from "redux-saga/effects";
import axios from "axios";

function* clientRegistrationSaga() {
  yield takeLatest("CLIENT_REGISTER", registerClient);
}

function* registerClient(action) {
  try {
    if (action.payload.file === undefined) {
      yield axios.post("/api/client/withoutImg", action.payload.text);
    } else {
      const data = new FormData();
      data.append("file", action.payload.file);
      delete action.payload.text.profile_img;
      for (const [key, value] of Object.entries(action.payload.text)) {
        data.append(key, value);
      }

      yield axios.post(`/api/client`, data, {
        headers: {
          accept: "application/json",
          "Accept-Language": "en-US,en;q=0.8",
          "Content-Type": action.payload.file.type,
        },
      });
    }
    yield axios.post("/api/pet", action.payload);
    const user_id = yield select((reduxState) => reduxState.user.id);
    yield put({ type: "GET_CLIENT_DATA" });
    yield put({ type: "GET_PET_DATA", payload: user_id });
  } catch (error) {
    console.log("Error with client registration:", error);
  }
}

export default clientRegistrationSaga;
