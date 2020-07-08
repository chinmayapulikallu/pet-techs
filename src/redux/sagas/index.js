import { all } from "redux-saga/effects";
import loginSaga from "./loginSaga";
import registrationSaga from "./registrationSaga";
import userSaga from "./userSaga";
import vetTechRegSaga from "./vetTechRegSaga";
import clientRegistrationSaga from "./clientRegistrationSaga";
import clientInfoSaga from "./clientInfoSaga";
import vtInfoSaga from "./vtInfoSaga";
import petInfoSaga from "./petInfoSaga";
import clientServiceRequestSaga from "./clientServiceRequestSaga";
import filterSaga from "./filterSaga";

export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    vetTechRegSaga(),
    clientInfoSaga(),
    clientRegistrationSaga(),
    vtInfoSaga(),
    petInfoSaga(),
    clientServiceRequestSaga(),
    filterSaga(),
  ]);
}
