const petCarePlanReducer = (state = {}, action) => {
    console.log('petCarePlan Reducer----->', action.payload);
    switch (action.type) {
        case "GET_PET_CAREPLAN_SUCCESSFUL":
            console.log("PAYLOAD", action.payload);
            return action.payload; 
        default:
            return state;
    }
}




export default petCarePlanReducer;