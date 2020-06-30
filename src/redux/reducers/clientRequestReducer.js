const clientRequestReducer = (state = [], action) => {
  console.log("client service request Reducer----->", action.payload);
  switch (action.type) {
    case "SET_CLIENT_REQUEST":
      return action.payload;
    default:
      return state;
  }
};

export default clientRequestReducer;