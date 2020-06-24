const petInfoReducer = (state = [], action) => {
    console.log('pet Info Reducer----->', action.payload);
    switch (action.type) {
        case 'SET_PET':
            return action.payload;
        default:
            return state;
    }
}




export default petInfoReducer;