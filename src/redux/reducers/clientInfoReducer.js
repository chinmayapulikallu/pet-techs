// const defaultState = {
//   file: {},
//   text: {
//     client_name: "",
//     home_address_house: "",
//     apt_suite: "",
//     city: "",
//     state: "",
//     zip_code: "",
//     about_client: "",
//     about_home: "",
//     about_equipment: "",
//     contact_name_1: "",
//     contact_phone_1: "",
//     contact_email_1: "",
//     vet_clinic: "",
//     clinic_address: "",
//     clinic_phone: "",
//     transport: false,
//   }
// };

// const clientInfoReducer = (state = defaultState, action) => {
const clientInfoReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_CLIENT_DATA":
      return action.payload;
      case "UNSET_CLIENT":
          return [];
    default:
      return state;
  }
};

export default clientInfoReducer;
