// TODO: remove mock data
const initialState = {
  vet_name: "Natalie Hummel",
  profile_img:
    "https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2020/05/05/93e3ef18-8dd9-11ea-a674-527cfdef49ee_image_hires_105518.JPG?itok=YnvZib7J&v=1588647327",
  city: "Plymouth",
  state: "MN",
  sleep_over: true,
  boarding: false,
  dropin_care: true,
  hospice: true,
  equipment_list: "Stethoscope, Glucose Monitor, Dog and Cat Carriers, First Aid Kit, Leashes"
};

const vtInfo = (state = initialState, action) => {
  switch (action.type) {
    case "SET_VT_DATA":
      console.log("in vt reducer:", action.payload);
      return action.payload;
    default:
      return state;
  }
};
export default vtInfo;
