import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* registerClient(action) {
    console.log('client registration saga::::----->', action.payload)
    try {
        const data = new FormData();
        data.append('file', action.payload.file)


        for (const [key, value] of Object.entries(action.payload)) {
            data.append(key, value);
        }
        console.log('----------->formdata', action.payload.file.type);
        console.log('send this client data to server', action.payload);


        yield axios.post('/api/client', action.payload)
        // yield axios.post(`/api/client`, data, action.payload, {
        //     headers: {
        //         'accept': 'application/json',
        //         'Accept-Language': 'en-US,en;q=0.8',
        //         'Content-Type': action.payload.file.type,
        //     }
        // });

        yield axios.post('/api/pet', action.payload)
    } catch (error) {
        console.log('Error with client registration:', error);
    }
}

// function* addItem(action) {
//     try {
//         let boxId = action.payload.itemData.id
//         let roomId = action.payload.itemData.roomId
//         let item = action.payload.itemData.item

//         const data = new FormData();
//         data.append('file', action.payload.file)

//         for (const [key, value] of Object.entries(action.payload.itemData)) {
//             data.append(key, value);
//         }

//         console.log('----------->formdata', action.payload.file.type);
//         console.log('----------->item data', action.payload.itemData.item);


//         console.log('----------->from addItem get this room id', roomId);
//         console.log('add this item', action.payload);
//         yield axios.post(`/api/item/${roomId}/${boxId}`, data, action.payload, {
//             headers: {
//                 'accept': 'application/json',
//                 'Accept-Language': 'en-US,en;q=0.8',
//                 'Content-Type': action.payload.file.type,
//             }
//         });
//         console.log('send this item to server', action.payload.itemData.item);
//         yield put({
//             type: 'FETCH_ITEMS',
//             payload: {
//                 id: boxId,
//                 roomId: roomId
//             }
//         });


//     } catch (error) {
//         console.log('Error with add new item:', error);
//     }
// }

function* clientRegistrationSaga() {
    yield takeLatest('CLIENT_REGISTER', registerClient);
}

export default clientRegistrationSaga;