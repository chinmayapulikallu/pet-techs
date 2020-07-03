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
import filterSaga from "./filterSaga"


// It bundles up all of the other sagas so our project can use them.

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
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
    filterSaga()
  ])
}
