import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* registerClient(action) {
    try {
       yield axios.post('/api/client', action.payload)
        try {
       yield axios.post('/api/pet', action.payload)
        } catch (error) {
        console.log('Error with client registration:', error);
    }
    } catch (error) {
        console.log('Error with client registration:', error);
    }
}

function* clientRegistrationSaga() {
    yield takeLatest('CLIENT_REGISTER', registerClient);
}

export default clientRegistrationSaga;