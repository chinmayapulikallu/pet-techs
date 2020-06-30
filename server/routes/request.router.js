const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
  const sqlText = `SELECT * from "client_request" where client_request.id = $1 `;
  pool
    .query(sqlText, [req.params.id])
    .then((response) => {
      console.log(" client service request:", response.rows[0]);
      //Since we only need the first, and only row, we are setting the index to 0.
      res.send(response.rows[0]);
    })
    .catch((error) => {
      console.log(`Error in getting client service request. ${sqlText}`, error);
      res.sendStatus(500);
    });
    
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    console.log("client request post::::", req.body, req.user.id);
    const pet_id = parseInt(req.body.pet_id);
    const vet_id = req.user.id;
    const start_date_time = req.body.start_date_time;
    const end_date_time = req.body.end_date_time;
    const add_info = req.body.add_info;
  
    // const request_status = req.body.request_status;
    const queryText =
      `INSERT INTO "client_request" ( pet_id, vet_id, start_date_time, end_date_time, add_info) 
      VALUES ($1, $2, $3, $4, $5)`;
    pool
      .query(queryText, [
        pet_id,
        vet_id, 
        start_date_time, 
        end_date_time, 
        add_info, 
        // request_status
      ])
      .then(() => res.sendStatus(201))
  
      .catch((error) => {
          console.log(error)
          res.sendStatus(500)});
});

module.exports = router;