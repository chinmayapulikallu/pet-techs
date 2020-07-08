const petCarePlanReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_PET_CAREPLAN_SUCCESSFUL":
      return action.payload;
    case "PET_CAREPLAN":
      return [];
    default:
      return state;
  }
};

export default petCarePlanReducer;
