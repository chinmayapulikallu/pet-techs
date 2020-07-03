const clientRequestReducer = (state = [], action) => {
  console.log("client service request Reducer----->", action.payload);
  switch (action.type) {
    case "SET_CLIENT_REQUEST":
      return action.payload;
      case "UNSET_REQUEST":
          return [];
    default:
      return state;
  }
};

export default clientRequestReducer;