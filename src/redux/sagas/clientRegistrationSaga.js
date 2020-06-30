import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
const verbose = true; // turns on and off console.logs

// worker Saga: will be fired on "REGISTER" actions
function* registerClient(action) {
    console.log('client registration saga::::----->', action.payload)
    try {
        const data = new FormData();
        data.append('file', action.payload.file)

        for (const [key, value] of Object.entries(action.payload.text)) {
            data.append(key, value);
        }
        console.log('----------->data', action.payload.file);
        console.log('----------->formdata', action.payload.file.type);
        console.log('send this client data to server', action.payload);


        // yield axios.post('/api/client', action.payload)
        let response = yield axios.post(`/api/client`, data, action.payload, {
            headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': action.payload.file.type,
            }
        });
        // console.log('successfully uploaded to the S3: ', response);
        // window.location.reload();

        yield axios.post('/api/pet', action.payload)

        yield put({ type: 'GET_CLIENT_DATA' });
        yield put({ type: 'GET_PET_DATA' });

        
        // setTimeout(function () {
        // }, 1000);


    }
    catch (error) {
        console.log('Error with client registration:', error);
    }
}



function* clientRegistrationSaga() {
    yield takeLatest('CLIENT_REGISTER', registerClient);
}

export default clientRegistrationSaga;