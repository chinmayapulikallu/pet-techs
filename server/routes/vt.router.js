const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const multer = require("multer");
const multerDest = process.env.multer_dest || "../uploads";
const upload = multer({ dest: multerDest });
const { uploadVTPost, uploadVTProfile,generateSignedUrls } = require("../modules/imageHandler");

/**
 * GET route template
 */
router.get("/", rejectUnauthenticated, (req, res) => {
  const sqlText = `SELECT * from vet_tech where user_id = $1; `;
  pool
    .query(sqlText, [req.user.id])
    .then(response => {
      generateSignedUrls(res, response.rows);
     })
   
    .catch((error) => {
      console.log(`Error getting Pet Tech info ${sqlText}`, error);
      res.sendStatus(500);
    });
});

// GET SINGLE VT PROFILE FOR VIEWING 
router.get("/profile/:id", rejectUnauthenticated, (req, res) => {
  const sqlText = `SELECT * from vet_tech where user_id = $1; `;
  pool
    .query(sqlText, [req.params.id])
    .then((response) => {
      res.send(response.rows[0]);
    })
    // .then(response => {
    //   generateSignedUrls(res, response.rows);
    //  })
    .catch((error) => {
      console.log(`Error getting Pet Tech info ${sqlText}`, error);
      res.sendStatus(500);
    });
});

router.get("/all", rejectUnauthenticated, (req, res) => {
  const sqlText = `SELECT * FROM "vet_tech" ORDER BY vet_name ASC; `;
  pool
    .query(sqlText)
    .then((response) => {
      res.send(response.rows);
    })
    // .then(response => {
    //   generateSignedUrls(res, response.rows);
    //  })
    .catch((error) => {
      console.log(`Error getting Pet Tech info ${sqlText}`, error);
      res.sendStatus(500);
    });
});

//FILTER DOG TEST
router.get("/dog", rejectUnauthenticated, (req, res) => {
  const sqlText = `SELECT * FROM "vet_tech" WHERE dogs=true ORDER BY vet_name ASC; `;
  pool
    .query(sqlText)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((error) => {
      console.log(`Error getting Pet Tech info ${sqlText}`, error);
      res.sendStatus(500);
    });
});
//FILTER CAT TEST
router.get("/cat", rejectUnauthenticated, (req, res) => {
  const sqlText = `SELECT * FROM "vet_tech" WHERE cats=true ORDER BY vet_name ASC; `;
  pool
    .query(sqlText)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((error) => {
      console.log(`Error getting Pet Tech info ${sqlText}`, error);
      res.sendStatus(500);
    });
});

//FILTER OTHER TEST
router.get("/other", rejectUnauthenticated, (req, res) => {
  const sqlText = `SELECT * FROM "vet_tech" WHERE other=true ORDER BY vet_name ASC; `;
  pool
    .query(sqlText)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((error) => {
      console.log(`Error getting Pet Tech info ${sqlText}`, error);
      res.sendStatus(500);
    });
});

//FILTER PET SLEEPOVER 
router.get("/sleepover", rejectUnauthenticated, (req, res) => {
  const sqlText = `SELECT * FROM "vet_tech" WHERE sleep_over=true ORDER BY vet_name ASC; `;
  pool
    .query(sqlText)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((error) => {
      console.log(`Error getting Pet Tech info ${sqlText}`, error);
      res.sendStatus(500);
    });
});

//FILTER PET BOARDING
router.get("/boarding", rejectUnauthenticated, (req, res) => {
  const sqlText = `SELECT * FROM "vet_tech" WHERE boarding=true ORDER BY vet_name ASC; `;
  pool
    .query(sqlText)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((error) => {
      console.log(`Error getting Pet Tech info ${sqlText}`, error);
      res.sendStatus(500);
    });
});

//FILTER DROP_IN VETS
router.get("/dropin", rejectUnauthenticated, (req, res) => {
  const sqlText = `SELECT * FROM "vet_tech" WHERE dropin_care=true ORDER BY vet_name ASC; `;
  pool
    .query(sqlText)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((error) => {
      console.log(`Error getting Pet Tech info ${sqlText}`, error);
      res.sendStatus(500);
    });
});

//FILTER HOSPICE VETS
router.get("/hospice", rejectUnauthenticated, (req, res) => {
  const sqlText = `SELECT * FROM "vet_tech" WHERE hospice=true ORDER BY vet_name ASC; `;
  pool
    .query(sqlText)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((error) => {
      console.log(`Error getting Pet Tech info ${sqlText}`, error);
      res.sendStatus(500);
    });
});




/**
 * POST route template
 */
router.post("/", upload.single("file"), (req, res) => {
  uploadVTPost(req, res);
  console.log("---->VT id from post route", req.body);
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
  } = req.body;
  const user_id = req.user.id;
  const sqlText = `UPDATE vet_tech SET vet_name = $2, city = $3, state= $4, sleep_over = $5, 
    boarding = $6, dropin_care = $7, hospice = $8, about_vet = $9, dogs = $10,cats = $11, other = $12,
    zero_two = $13, two_four = $14, four_eight = $15, not_available = $16, small_dog = $17, 
    medium_dog = $18, large_dog = $19, giant_dog = $20, pet_younger_than_one = $21, pet_more_than_one_family = $22, equipment_list = $23, 
    experience = $24, certifications = $25, current_job_title = $26, expertise = $27 where user_id = $1;`;
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
    ])
    .then((response) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`Error updating vt by id request.`, error);
      res.sendStatus(500);
    });
});

router.put("/updateProfilePicture", upload.single("file"), (req, res) => {
  uploadVTProfile(req, res);
  console.log("-----> VT data from put route",req.user.id);
});

module.exports = router;
