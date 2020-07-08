const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const sgMail = require("@sendgrid/mail");
const dotenv = require('dotenv')
dotenv.config();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

 // Gets client_request and vet name for the current user's pets
router.get('/client', rejectUnauthenticated, (req, res) => {
  const getPetIdsForGivenUser = `select pet.id from pet where user_id = $1`
  pool.query(getPetIdsForGivenUser, [req.user.id])
    .then((response) => {
      let petIdsForGivenUser = [...response.rows.map(pet => pet.id)]
      let sqlText = `select client_request.*, vet_tech.vet_name, pet.pet_name,
       (select client_name from client where client.user_id = $2) 
        from client_request, vet_tech, pet 
        where client_request.vet_id = vet_tech.user_id 
          and client_request.pet_id = pet.id 
          and client_request.pet_id = ANY($1::int[])`
      pool
        .query(sqlText, [petIdsForGivenUser, req.user.id])
        .then((response) => {
          res.send(response.rows);
        })
        .catch((error) => {
          res.sendStatus(500);
        });
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});

// service request post route
router.post("/client", rejectUnauthenticated, (req, res) => {
    const hasEnvVariables =
    process.env.SENDGRID_API_KEY && process.env.SENDGRID_FROM_EMAIL;
   if (req.user.id && req.user.user_email && hasEnvVariables) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: req.user.user_email,
      from: process.env.SENDGRID_FROM_EMAIL,
      subject: "New service Request!",
      text: " Test to send email",
      html:
        "Thanks for creating a new event to bring people together. More info to come before your event.",
    };
    sgMail.send(msg);
  }
 
  const petIds = req.body.pet_id;
  const vet_id = req.body.vet_id;
  const start_date_time = req.body.start_date_time;
  const end_date_time = req.body.end_date_time;
  const add_info = req.body.add_info;
  const input_info = req.body.input_info;
  const service_select = req.body.service_select;
  const queryText =
    `INSERT INTO "client_request" ( pet_id, vet_id, start_date_time, end_date_time, add_info, input_info, service_select) 
      VALUES ($1, $2, $3, $4, $5, $6, $7)`;
  petIds.map(async petId => {
    await pool
      .query(queryText, [
        petId,
        vet_id,
        start_date_time,
        end_date_time,
        add_info,
        input_info,
        service_select
      ])
      .then(() => res.sendStatus(201))
      .catch((error) => {
        res.sendStatus(500)
      });
  })
});



 //GET Service request for the Vet Tech
router.get("/vt", rejectUnauthenticated, (req, res) => {
  const sqlText = `select client_request.start_date_time, client_request.end_date_time, client_request.add_info,
                   pet.pet_name, client_request.vet_id, pet_id, input_info, pet.id, client_request.id,
                  client_request.request_status,client.client_name, client_request.service_select, 
                  pet.pet_type, "user".user_email,"user".phone_number from client_request, pet, client, "user" where
                  client_request.pet_id = pet.id and 
                  pet.user_id = client.user_id and 
                  client.user_id = "user".id and
                  client_request.vet_id = $1;`;
  pool
    .query(sqlText, [req.user.id])
    .then((response) => {
      res.send(response.rows);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});
// update request status for service request
router.put("/", rejectUnauthenticated, (req, res) => {
  const {
    id,
    request_status,
  } = req.body;
  const sqlText = `UPDATE client_request SET request_status = $2 where id = $1; `;
  pool
    .query(sqlText, [id, request_status])
    .then(() => res.sendStatus(200))
    .catch((error) => {
      res.sendStatus(500);
    });
});

module.exports = router;