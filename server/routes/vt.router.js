const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const multer = require("multer");
const multerDest = process.env.multer_dest || "../uploads";
const upload = multer({ dest: multerDest });
const {
  uploadVTPost,
  uploadVTProfile,
  generateSignedUrls,
} = require("../modules/imageHandler");

// get route for the VT
router.get("/", rejectUnauthenticated, (req, res) => {
  const sqlText = `SELECT * from vet_tech where user_id = $1; `;
  pool
    .query(sqlText, [req.user.id])
    .then((response) => {
      generateSignedUrls(res, response.rows);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});

// GET SINGLE VT PROFILE FOR VIEWING
router.get("/profile/:id", rejectUnauthenticated, (req, res) => {
  const sqlText = `SELECT * from vet_tech where user_id = $1; `;
  pool
    .query(sqlText, [req.params.id])
    .then((response) => {
      generateSignedUrls(res, response.rows);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});
// get route for all VT for search feature
router.get("/all", rejectUnauthenticated, (req, res) => {
  const sqlText = `SELECT * FROM "vet_tech" ORDER BY vet_name ASC; `;
  pool
    .query(sqlText)
    .then((response) => {
      generateSignedUrls(res, response.rows);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});

//Filter Dog Search
router.get("/dog", rejectUnauthenticated, (req, res) => {
  const sqlText = `SELECT * FROM "vet_tech" WHERE dogs=true ORDER BY vet_name ASC; `;
  pool
    .query(sqlText)
    .then((response) => {
      generateSignedUrls(res, response.rows);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});
//Filter Cat Search
router.get("/cat", rejectUnauthenticated, (req, res) => {
  const sqlText = `SELECT * FROM "vet_tech" WHERE cats=true ORDER BY vet_name ASC; `;
  pool
    .query(sqlText)
    .then((response) => {
      generateSignedUrls(res, response.rows);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});

//Filter Other Search
router.get("/other", rejectUnauthenticated, (req, res) => {
  const sqlText = `SELECT * FROM "vet_tech" WHERE other=true ORDER BY vet_name ASC; `;
  pool
    .query(sqlText)
    .then((response) => {
      generateSignedUrls(res, response.rows);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});

//FILTER PET SLEEPOVER
router.get("/sleepover", rejectUnauthenticated, (req, res) => {
  const sqlText = `SELECT * FROM "vet_tech" WHERE sleep_over=true ORDER BY vet_name ASC; `;
  pool
    .query(sqlText)
    .then((response) => {
      generateSignedUrls(res, response.rows);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});

//FILTER PET BOARDING
router.get("/boarding", rejectUnauthenticated, (req, res) => {
  const sqlText = `SELECT * FROM "vet_tech" WHERE boarding=true ORDER BY vet_name ASC; `;
  pool
    .query(sqlText)
    .then((response) => {
      generateSignedUrls(res, response.rows);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});

//FILTER DROP_IN VETS
router.get("/dropin", rejectUnauthenticated, (req, res) => {
  const sqlText = `SELECT * FROM "vet_tech" WHERE dropin_care=true ORDER BY vet_name ASC; `;
  pool
    .query(sqlText)
    .then((response) => {
      generateSignedUrls(res, response.rows);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});

//FILTER HOSPICE VETS
router.get("/hospice", rejectUnauthenticated, (req, res) => {
  const sqlText = `SELECT * FROM "vet_tech" WHERE hospice=true ORDER BY vet_name ASC; `;
  pool
    .query(sqlText)
    .then((response) => {
      generateSignedUrls(res, response.rows);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});

// Post route for VT with Image
router.post("/", upload.single("file"), (req, res) => {
  uploadVTPost(req, res);
});
// Post route for VT without image
router.post("/withoutImg", (req, res) => {
  const user_id = req.user.id;
  const vet_name = req.body.vet_name;
  const home_address_house = req.body.home_address_house;
  const apt_suite = req.body.apt_suite;
  const city = req.body.city;
  const state = req.body.state;
  const zip_code = req.body.zip_code;
  const sleep_over = req.body.sleep_over;
  const boarding = req.body.boarding;
  const dropin_care = req.body.dropin_care;
  const hospice = req.body.hospice;
  const about_vet = req.body.about_vet;
  const dogs = req.body.dogs;
  const cats = req.body.cats;
  const other = req.body.other;
  const vet_available = req.body.vet_available;
  const zero_two = req.body.zero_two;
  const two_four = req.body.two_four;
  const four_eight = req.body.four_eight;
  const not_available = req.body.not_available;
  const small_dog = req.body.small_dog;
  const medium_dog = req.body.medium_dog;
  const large_dog = req.body.large_dog;
  const giant_dog = req.body.giant_dog;
  const pet_younger_than_one = req.body.pet_younger_than_one;
  const pet_more_than_one_family = req.body.pet_more_than_one_family;
  const equipment_list = req.body.equipment_list;
  const experience = req.body.experience;
  const certifications = req.body.certifications;
  const current_job_title = req.body.current_job_title;
  const expertise = req.body.expertise;
  const bioYourself = req.body.bioYourself;
  const cpr_first_aid = req.body.cpr_first_aid;
  const oral_medication = req.body.oral_medication;
  const injectable_medication = req.body.injectable_medication;
  const exp_older_pet = req.body.exp_older_pet;
  const exp_special_pet = req.body.exp_special_pet;
  const daily_exercise = req.body.daily_exercise;
  const pet_longer_than_a_week = req.body.pet_longer_than_a_week;
  const diabetic_insulin_care = req.body.diabetic_insulin_care;
  const queryText = `INSERT INTO "vet_tech" ( user_id, vet_name, home_address_house, 
          apt_suite, city, state, zip_code, sleep_over, boarding, 
          dropin_care, hospice, about_vet, dogs, cats, other, vet_available, 
          zero_two, two_four, four_eight, not_available, small_dog, medium_dog, 
          large_dog, giant_dog, pet_younger_than_one, pet_more_than_one_family, 
          equipment_list, experience, certifications, current_job_title, expertise,bioYourself, 
          cpr_first_aid, oral_medication, injectable_medication, exp_older_pet, 
          exp_special_pet, daily_exercise, pet_longer_than_a_week, 
          diabetic_insulin_care)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, 
              $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, 
              $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, 
              $38, $39, $40)`;
  pool
    .query(queryText, [
      user_id,
      vet_name,
      home_address_house,
      apt_suite,
      city,
      state,
      zip_code,
      sleep_over,
      boarding,
      dropin_care,
      hospice,
      about_vet,
      dogs,
      cats,
      other,
      vet_available,
      zero_two,
      two_four,
      four_eight,
      not_available,
      small_dog,
      medium_dog,
      large_dog,
      giant_dog,
      pet_younger_than_one,
      pet_more_than_one_family,
      equipment_list,
      experience,
      certifications,
      current_job_title,
      expertise,
      bioYourself,
      cpr_first_aid,
      oral_medication,
      injectable_medication,
      exp_older_pet,
      exp_special_pet,
      daily_exercise,
      pet_longer_than_a_week,
      diabetic_insulin_care,
    ])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});

//UPDATE VT INFO
router.put("/", rejectUnauthenticated, (req, res) => {
  const {
    vet_name,
    city,
    state,
    sleep_over,
    boarding,
    dropin_care,
    hospice,
    about_vet,
    dogs,
    cats,
    other,
    zero_two,
    two_four,
    four_eight,
    not_available,
    small_dog,
    medium_dog,
    large_dog,
    giant_dog,
    pet_younger_than_one,
    pet_more_than_one_family,
    equipment_list,
    experience,
    certifications,
    current_job_title,
    expertise,
    bioyourself,
  } = req.body;
  const user_id = req.user.id;
  const sqlText = `UPDATE vet_tech SET vet_name = $2, city = $3, state= $4, sleep_over = $5, 
    boarding = $6, dropin_care = $7, hospice = $8, about_vet = $9, dogs = $10,cats = $11, other = $12,
    zero_two = $13, two_four = $14, four_eight = $15, not_available = $16, small_dog = $17, 
    medium_dog = $18, large_dog = $19, giant_dog = $20, pet_younger_than_one = $21, pet_more_than_one_family = $22, equipment_list = $23, 
    experience = $24, certifications = $25, current_job_title = $26, expertise = $27, bioyourself= $28 where user_id = $1;`;
  pool
    .query(sqlText, [
      user_id,
      vet_name,
      city,
      state,
      sleep_over,
      boarding,
      dropin_care,
      hospice,
      about_vet,
      dogs,
      cats,
      other,
      zero_two,
      two_four,
      four_eight,
      not_available,
      small_dog,
      medium_dog,
      large_dog,
      giant_dog,
      pet_younger_than_one,
      pet_more_than_one_family,
      equipment_list,
      experience,
      certifications,
      current_job_title,
      expertise,
      bioyourself,
    ])
    .then((response) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});
// Update VT Profile picture
router.put("/updateProfilePicture", upload.single("file"), (req, res) => {
  uploadVTProfile(req, res);
});

module.exports = router;
