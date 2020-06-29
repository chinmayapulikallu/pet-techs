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
  equipment_list:
    "Stethoscope, Glucose Monitor, Dog and Cat Carriers, First Aid Kit, Leashes",
  dogs: true,
  cats: false,
  other: true,
  zero_two: false,
  two_four: false,
  four_eight: true,
  not_available: false,
  small_dog: true,
  medium_dog: true,
  large_dog: true,
  giant_dog: true,
  pet_more_than_one_family: true,
  pet_younger_than_one: true,
  experience: 4,
  certifications: "BA - Biology, Full Stack Software Engineer",
  current_job_title: "Unemployed",
  bioYourself: "Byun Baek-hyun (born May 6, 1992), better known mononymously as Baekhyun, is a South Korean singer, songwriter, and actor. He debuted in 2012 as a member of the South Korean–Chinese boy group Exo, and its sub-group Exo-K and sub-unit Exo-CBX. In July 2019, he made his debut as a soloist with the release of his debut EP, City Lights. The album sold more than half a million copies in 2019, and was the best-selling physical album by a solo artist of the 2010s in South Korea.[1] Baekhyun is also a member of the South Korean supergroup SuperM.",
  expertise: "Diabetes Care, High Energy Care, Intravenous Injections, Intra Muscular Injections"
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
