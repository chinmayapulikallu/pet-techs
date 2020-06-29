// TODO: remove mock data
const initialState = {
  username: "Natalie Hummel",
  profile_img:
    "https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2020/05/05/93e3ef18-8dd9-11ea-a674-527cfdef49ee_image_hires_105518.JPG?itok=YnvZib7J&v=1588647327",
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
