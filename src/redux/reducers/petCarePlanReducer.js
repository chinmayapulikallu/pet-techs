const petCarePlanReducer = (state = {}, action) => {
    switch (action.type) {
        case "GET_PET_CAREPLAN_SUCCESSFUL":
            console.log("PAYLOAD", action.payload);
            return action.payload; 
        case "UPDATE_PET_CARE_PLAN":
            return {...state, ...action.payload};         
        default:
            return state;
    }
}




export default petCarePlanReducer;