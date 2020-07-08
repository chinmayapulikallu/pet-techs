const clientRequestReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_CLIENT_REQUEST":
      return action.payload;
    case "SET_VT_REQUEST":
      return action.payload;
    case "UNSET_REQUEST":
      return [];
    default:
      return state;
  }
};

export default clientRequestReducer;
