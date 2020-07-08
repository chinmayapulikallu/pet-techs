const vtInfoPage3 = (state = {}, action) => {
  switch (action.type) {
    case "SET_VT_DATA_PAGE_3":
      return action.payload;
    case "UNSET_VT_INFO":
      return {};
    default:
      return state;
  }
};
export default vtInfoPage3;
