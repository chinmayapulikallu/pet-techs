import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
// import { response } from "express";

function* petInfoSaga() {
  yield takeLatest("GET_PET_DATA", getPetData);
  yield takeLatest('GET_PET_CARE_PLAN', getPetCarePlan);
  yield takeLatest('SAVE_PET_DETAILS', savePetDetails);
  yield takeLatest('UPDATE_PROFILE_PICTURE', updateProfilePicture);


}

function* getPetData(action) {
  try {
    const id = action.payload.id
    const response = yield axios.get(`/api/pet/${id}`);
    yield put({
      type: "GET_PET_DATA_SUCCESSFUL",
      payload: response.data,
    });
  } catch (error) {
    console.log("Error with get pet data:", error);
  }
}
function* getPetCarePlan(action) {
  try {
    const id = action.payload.id;
    const response = yield axios.get(`/api/pet/careplan/${id}`);
    yield put({
      type: "GET_PET_CAREPLAN_SUCCESSFUL",
      payload: response.data,
    });
  } catch (error) {
    console.log("Error with get pet careplan:", error);
  }
}

function* savePetDetails(action) {
  try {
    const response = yield axios.put(`/api/pet`, action.payload);
    yield put({
      type: "GET_PET_CARE_PLAN",
      payload: action.payload,
    });
  } catch (error) {
    console.log("Error with get pet data:", error);
  }
}

function* updateProfilePicture(action) {
  try {
    const id = action.payload.id;

    const data = new FormData();
    data.append('file', action.payload.file)
    
    console.log('from pet upload picture', action.payload)


    console.log('----------->formdata', action.payload.file.type);
    console.log('----------->from update picture get this pet id', id);
    console.log('send this picture', action.payload);
    // const response = yield axios.put(`/api/pet/updateProfilePicture`, action.payload);
    const response = yield axios.put(`/api/pet/updateProfilePicture/${id}`, data, {
      headers: {
        'accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
        'Content-Type': action.payload.file.type,
      }
    });
    console.log('send this pets data to router', action.payload.id);

    yield put({
      type: "GET_PET_CARE_PLAN",
      payload: action.payload,
    });


  } catch (error) {
    console.log("Error with get pet picture data:", error);
  }
}
export default petInfoSaga;

