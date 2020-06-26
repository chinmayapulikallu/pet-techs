import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* vetTechRegSaga() {
    yield takeLatest('ADD_VT', addVetTech);

}

// worker Saga: will be fired on "ADD_VT" actions
function* addVetTech(action) {
    try {
        yield axios.post('/api/vt', action.payload);
        yield put({
            type: 'SET_VT_DATA',
            payload: action.payload,
        });
        console.log('-----> receive this data from client', action.payload)

    } catch (error) {
        console.log('Error with add vet tech:', error);
    }
}



export default vetTechRegSaga;
