const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

const multer = require("multer");
const multerDest = process.env.multer_dest || "../uploads";
const upload = multer({ dest: multerDest });
const { uploadPost, uploadClientProfile, generateSignedUrls } = require("../modules/imageHandler");

/**
 * GET route template
 */
router.get("/", rejectUnauthenticated, (req, res) => {
  const sqlText = `SELECT * from client where user_id = $1;`;
  pool
    .query(sqlText, [req.user.id])
    .then(response => {
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

router.post("/withoutImg", (req, res) => {
  console.log('post request without img', req.body)
  const user_id = req.user.id;
  const client_name = req.body.client_name;
  const home_address_house = req.body.home_address_house;
  const apt_suite = req.body.apt_suite;
  const city = req.body.city;
  const state = req.body.state;
  const zip_code = req.body.zip_code;
  const about_client = req.body.about_client;
  const about_home = req.body.about_home;
  const about_equipment = req.body.about_equipment;
  const contact_name_1 = req.body.contact_name_1;
  const contact_phone_1 = req.body.contact_phone_1;
  const contact_email_1 = req.body.contact_email_1;
  const vet_clinic = req.body.vet_clinic;
  const clinic_address = req.body.clinic_address;
  const clinic_phone = req.body.clinic_phone;
  const transport = req.body.transport;
  console.log('client id from post route', user_id, client_name, home_address_house, apt_suite, city, state, zip_code, about_client, about_home, about_equipment, contact_name_1, contact_phone_1, contact_email_1, vet_clinic, clinic_address, clinic_phone, transport)

  const queryText =
    `INSERT INTO "client" ( user_id, client_name, home_address_house, apt_suite, city, state, zip_code, about_client, about_home, about_equipment, contact_name_1, contact_phone_1, contact_email_1, vet_clinic, clinic_address, clinic_phone, transport)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17);`;

  pool.query(queryText, [
    user_id,
    client_name,
    home_address_house,
    apt_suite,
    city,
    state,
    zip_code,
    about_client,
    about_home,
    about_equipment,
    contact_name_1,
    contact_phone_1,
    contact_email_1,
    vet_clinic,
    clinic_address,
    clinic_phone,
    transport
  ])
    .then((result) => {
      console.log('back from db with:', result);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('error in POST', error);
      res.sendStatus(500);
    })
})


router.put("/updateProfilePicture", upload.single("file"), (req, res) => {
  uploadClientProfile(req, res);
  console.log("client data from put route", req.user.id);
});

module.exports = router;
