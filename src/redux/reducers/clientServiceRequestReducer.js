const clientServiceRequestReducer = (state = [], action) => {
  console.log("client service request Reducer----->", action.payload);
  switch (action.type) {
    case "SET_CLIENT_SERVICE_REQUEST":
      return action.payload;
    default:
      return state;
  }
};

export default clientServiceRequestReducer;