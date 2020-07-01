const vtInfoPage1 = (state = {}, action) => {
    switch (action.type) {
        case 'SET_VT_DATA_PAGE_1':
            return action.payload;
        default:
            return state;
    }
};
export default vtInfoPage1;