const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
// const sgMail = require("@sendgrid/mail");
// const { getMaxListeners } = require('../modules/pool');
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

/**
 * GET route template
 */
// router.get('/:id', (req, res) => {
//   console.log(":::::", req.params.id)
//   // const sqlText = `SELECT * from "client_request" where client_request.id = $1 `;
//   const sqlText = `select client_request.*, vet_tech.vet_name from client_request, vet_tech where client_request.vet_id = vet_tech.user_id`
//   pool
//     .query(sqlText, [req.params.id])
//     .then((response) => {
//       console.log(" client service request:", response.rows[0]);
//       //Since we only need the first, and only row, we are setting the index to 0.
//       res.send(response.rows[0]);
//     })
//     .catch((error) => {
//       console.log(`Error in getting client service request. ${sqlText}`, error);
//       res.sendStatus(500);
//     });

// });

/**
 * Gets client requested pets service request list
 * 
 * Gets client_request and vet name for the current user's pets
 */
router.get('/', (req, res) => {
  const getPetIdsForGivenUser = `select pet.id from pet where user_id = $1`
  pool.query(getPetIdsForGivenUser, [req.user.id])
    .then((response) => {
      let petIdsForGivenUser = [...response.rows.map(pet => pet.id)]
        console.log(" PetIdsForGivenUser :: ", petIdsForGivenUser);
        
        const sqlText = `select client_request.*, vet_tech.vet_name from client_request, vet_tech where client_request.vet_id = vet_tech.user_id
           and client_request.pet_id = ANY($1::int[])`
        pool
          .query(sqlText, [petIdsForGivenUser])
          .then((response) => {
            console.log(" client service request:", response.rows);
            //Since we only need the first, and only row, we are setting the index to 0.
            res.send(response.rows);
          })
          .catch((error) => {
            console.log(`Error in getting client service request. ${sqlText}`, error);
            res.sendStatus(500);
          });
      })
    .catch((error) => {
        console.log(`Error in getting getPetIdsForGivenUser ${getPetIdsForGivenUser}`, error);
        res.sendStatus(500);
    }); 
});

/**
 * POST route template
 */
router.post("/", (req, res) => {
    console.log("client request post::::", req.body, req.user.id, req.user.user_email);
  //   const hasEnvVariables =
  //   process.env.SENDGRID_API_KEY && process.env.SENDGRID_FROM_EMAIL;
  // if (req.user.id && req.user.user_email && hasEnvVariables) {
  //   sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  //   const msg = {
  //     to: req.user.user_email,
  //     from: process.env.SENDGRID_FROM_EMAIL,
  //     subject: "New service Request!",
  //     text: " Test to send email",
  //     html:
  //       "Thanks for creating a new event to bring people together. More info to come before your event.",
  //   };
  //   sgMail.send(msg);
  // }
  //---------------------------
  //   const pet_id = parseInt(req.body.pet_id);
  //   const vet_id = req.user.id;
  //   const start_date_time = req.body.start_date_time;
  //   const end_date_time = req.body.end_date_time;
  //   const add_info = req.body.add_info;
  
  //   // log.info("post client_request :: ", pet_id)
  //   // const request_status = req.body.request_status;
  //   const queryText =
  //     `INSERT INTO "client_request" ( pet_id, vet_id, start_date_time, end_date_time, add_info) 
  //     VALUES ($1, $2, $3, $4, $5)`;
  // pool
  //   .query(queryText, [
  //     pet_id,
  //     vet_id,
  //     start_date_time,
  //     end_date_time,
  //     add_info,
  //     // request_status
  //   ])
  //   .then(() => res.sendStatus(201))

  //   .catch((error) => {
  //     console.log(error)
  //     res.sendStatus(500)
  //   });

    const petIds = req.body.pet_id;
    const vet_id = req.body.vet_id;
    const start_date_time = req.body.start_date_time;
    const end_date_time = req.body.end_date_time;
    const add_info = req.body.add_info;
    const input_info = req.body.input_info;
    const service_select = req.body.service_select;
  
    // log.info("post client_request :: ", pet_id)
    // const request_status = req.body.request_status;
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
      console.log(error)
      res.sendStatus(500)
    });
    })
});

// router.post('/', (req, res) => {
//   console.log("client request post::::", req.body, req.user.id);
//   const pet_id = parseInt(req.body.pet_id);
//   const vet_id = req.user.id;
//   const start_date_time = req.body.start_date_time;
//   const end_date_time = req.body.end_date_time;
//   const add_info = req.body.add_info;

//   for (let i = 0; i < pet_id.length; i++) {
//     console.log('In for loop');
//     let requestQuery = `INSERT INTO "client_request" (pet_id, vet_id, start_date_time, end_date_time, add_info)
//                         VALUES ($1, $2, $3, $4, $5);`
//     console.log('in request for :::', pet_id[i].vet_id)
//     pool
//       .query(queryText, [
//         pet_id[i].pet_id,
//         pet_id[i].vet_id,
//         start_date_time[i],
//         end_date_time[i],
//         add_info[i],
//         // request_status
//       ])
     
//       .then(() => res.sendStatus(201))
//       .catch((error) => {
//         console.log(error)
//         res.sendStatus(500)
//       });
//   }
  


  

// });

module.exports = router;