import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* filterSaga() {
    yield takeLatest("GET_DOG_VETS", getDogVets)
    yield takeLatest("GET_CAT_VETS", getCatVets)
    yield takeLatest("GET_OTHER_VETS", getOtherVets)
    yield takeLatest("GET_SLEEPOVER_VETS", getSleepoverVets)
    yield takeLatest("GET_BOARDING_VETS", getBoardingVets)
    yield takeLatest("GET_DROPIN_VETS", getDropInVets)
    yield takeLatest("GET_HOSPICE_VETS", getHospiceVets)
    
}

//FILTER TEST
function* getDogVets(action) {
    try {
        const response = yield axios.get(`/api/vt/dog`);
        yield put({
            type: "GET_VT_DATA_SUCCESSFUL",
            payload: response.data,
        });
        console.log("ALL VT DATA", response.data);
    } catch (error) {
        console.log("Error with GET_ALL_VT_DATA:", error);
    }
}

function* getCatVets(action) {
    try {
        const response = yield axios.get(`/api/vt/cat`);
        yield put({
            type: "GET_VT_DATA_SUCCESSFUL",
            payload: response.data,
        });
        console.log("ALL VT DATA", response.data);
    } catch (error) {
        console.log("Error with GET_ALL_VT_DATA:", error);
    }
}

function* getOtherVets(action) {
    try {
        const response = yield axios.get(`/api/vt/other`);
        yield put({
            type: "GET_VT_DATA_SUCCESSFUL",
            payload: response.data,
        });
        console.log("ALL VT DATA", response.data);
    } catch (error) {
        console.log("Error with GET_ALL_VT_DATA:", error);
    }
}

function* getSleepoverVets(action) {
    try {
        const response = yield axios.get(`/api/vt/sleepover`);
        yield put({
            type: "GET_VT_DATA_SUCCESSFUL",
            payload: response.data,
        });
        console.log("ALL VT DATA", response.data);
    } catch (error) {
        console.log("Error with GET_ALL_VT_DATA:", error);
    }
}

function* getBoardingVets(action) {
    try {
        const response = yield axios.get(`/api/vt/boarding`);
        yield put({
            type: "GET_VT_DATA_SUCCESSFUL",
            payload: response.data,
        });
        console.log("ALL VT DATA", response.data);
    } catch (error) {
        console.log("Error with GET_ALL_VT_DATA:", error);
    }
}

function* getDropInVets(action) {
    try {
        const response = yield axios.get(`/api/vt/dropin`);
        yield put({
            type: "GET_VT_DATA_SUCCESSFUL",
            payload: response.data,
        });
        console.log("ALL VT DATA", response.data);
    } catch (error) {
        console.log("Error with GET_ALL_VT_DATA:", error);
    }
}
function* getHospiceVets(action) {
    try {
        console.log('IN HOSPICE VETS OF FILTERSAGA ------->>');
        
        const response = yield axios.get(`/api/vt/hospice`);
        yield put({
            type: "GET_VT_DATA_SUCCESSFUL",
            payload: response.data,
        });
        console.log("ALL VT DATA", response.data);
    } catch (error) {
        console.log("Error with GET_ALL_VT_DATA:", error);
    }
}
    

export default filterSaga;
