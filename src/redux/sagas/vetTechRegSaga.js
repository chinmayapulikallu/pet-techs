import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* vetTechRegSaga() {
    yield takeLatest('ADD_VT', addVetTech);
    yield takeLatest('ADD_VT_INFO_PAGE_3', addVetTechPage3);

}


// worker Saga: will be fired on "ADD_VT_INFO_PAGE_3" actions
function* addVetTechPage3(action) {
    try {
        // yield axios.post('/api/vt', action.payload);
        yield put({
            type: 'SET_VT_DATA',
            payload: action.payload,
        });
        console.log('-----> receip this data from client', action.payload)
    } catch (error) {
        console.log('Error with add info of reg vet tech page 3:', error);
    }
}


// worker Saga: will be fired on "ADD_VT" actions
function* addVetTech(action) {
    try {
        // yield axios.post('/api/vt', action.payload);
        yield put({
            type: 'SET_VT_DATA',
            payload: action.payload,
        });
        console.log('-----> receip this data from client', action.payload)

    } catch (error) {
        console.log('Error with add vet tech:', error);
    }
}



export default vetTechRegSaga;
