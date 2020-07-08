const vtInfoPage2 = (state = {}, action) => {
  switch (action.type) {
    case "SET_VT_DATA_PAGE_2":
      return action.payload;
    case "UNSET_VT_INFO":
      return {};
    default:
      return state;
  }
};
export default vtInfoPage2;
