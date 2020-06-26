import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
// import { response } from "express";

function* petInfoSaga() {
  yield takeLatest("GET_PET_DATA", getPetData);
  yield takeLatest('GET_PET_CARE_PLAN', getPetCarePlan);
  yield takeLatest('SAVE_PET_DETAILS', savePetDetails);

}

function* getPetData(action) {
  try {
    
    console.log('from petInfoSaga')
    const response = yield axios.get(`/api/pet`);
    yield put({
      type: "GET_PET_DATA_SUCCESSFUL",
      payload: response.data,
    });
    console.log("here is data from pet", response.data);
  } catch (error) {
    console.log("Error with get pet data:", error);
  }
}
function* getPetCarePlan(action) {
    try {
      const id = action.payload.id;
      console.log('from getPetCarePlanSaga', id)
      const response = yield axios.get(`/api/pet/careplan/${id}`);
      console.log(response);
      yield put({
        type: "GET_PET_CAREPLAN_SUCCESSFUL",
        payload: response.data,
      });
      console.log("here is data from pet careplan", response.data);
    } catch (error) {
      console.log("Error with get pet careplan:", error);
    }
  }

  function* savePetDetails(action) {
    try {
      
      console.log('from in petdetials')
      const response = yield axios.put(`/api/pet`, action.payload);
      yield put({
        type: "GET_PET_CARE_PLAN",
        payload: action.payload,
      });

      console.log("here is data from pet update", response.data);
    } catch (error) {
      console.log("Error with get pet data:", error);
    }
  }
export default petInfoSaga;
