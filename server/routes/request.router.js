const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

    const pet_id = req.body.pet_id;
    const vet_id = req.body.vet_id;
    const start_date_time = req.body.start_date_time;
    const end_date_time = req.body.end_date_time;
    const add_info = req.body.add_info;
    const request_status = req.body.request_status;
    const queryText =
      'INSERT INTO "client_request" ( pet_id, vet_id, start_date_time, end_date_time, add_info, request_status) VALUES ($1, $2, $3, $4, $5, $6)';
    pool
      .query(queryText, [
        pet_id,
        vet_id, 
        start_date_time, 
        end_date_time, 
        add_info, 
        request_status
      ])
      .then(() => res.sendStatus(201))
  
      .catch((error) => {
          console.log(error)
          res.sendStatus(500)});
});

module.exports = router;