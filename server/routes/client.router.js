const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

const multer = require("multer");
const multerDest = process.env.multer_dest || "../uploads";
const upload = multer({ dest: multerDest });
const { uploadPost, uploadClientProfile,generateSignedUrls } = require("../modules/imageHandler");

/**
 * GET route template
 */
router.get("/", rejectUnauthenticated, (req, res) => {
  const sqlText = `SELECT * from client where user_id = $1;`;
  console.log(req.user.id);
  pool
    .query(sqlText, [req.user.id])
    .then(response => {
      console.log('---->client data:', response.rows);
       generateSignedUrls(res, response.rows);
      })
    // .then((response) => {
    //   console.log('---->client data:', response.rows)
    //   res.send(response.rows);
    
    // })
    .catch((error) => {
      res.sendStatus(500);
    });
  });

router.put("/", rejectUnauthenticated, (req, res) => {
  const {
    client_name,
    about_client,
    about_equipment,
    about_home,
    city,
    state,
  } = req.body;
  const user_id = req.user.id;
  const sqlText = `UPDATE client SET client_name = $2, about_client = $3, about_equipment= $4, about_home = $5, 
    city = $6, state = $7 where user_id = $1; `;
  pool
    .query(sqlText, [
        user_id,
        client_name,
        about_client,
        about_equipment,
        about_home,
        city,
        state,
    ])
    .then((response) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`Error updating client by id request. ${sqlText}`, error);
      res.sendStatus(500);
    });
});

router.post("/", upload.single("file"), (req, res) => {
  uploadPost(req, res);
  console.log("client id from post route", req.body);
});

router.put("/updateProfilePicture", upload.single("file"), (req, res) => {
  uploadClientProfile(req, res);
  console.log("client data from post route",  req.user.id);
});

module.exports = router;
