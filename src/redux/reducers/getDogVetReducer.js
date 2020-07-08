const dogVetReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_DOG_VET_DATA":
      return action.payload;
    case "GET_DOG_VET_DATA":
      return action.payload;
    default:
      return state;
  }
};
export default dogVetReducer;
