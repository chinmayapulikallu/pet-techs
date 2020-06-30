const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
// const {
//     rejectUnauthenticated,
//   } = require("../modules/authentication-middleware");

/**
 * GET route template
 */
router.get("/",  (req, res) => {
  const sqlText = `SELECT "client".*, "pet".* from "client" LEFT outer JOIN "pet" ON  "client".user_id = "pet".user_id where client.user_id=4;
`;
    console.log(req.user.id);
  pool
    .query(sqlText, [req.user.id])
    .then(response => {
      console.log('---->client dashboard:', response.rows)
       generateSignedUrls(res, response.rows) 
      })

    // .then((response) => {
    //   console.log('---->client data:', response.rows)
    //   res.send(response.rows);
    // })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});



module.exports = router;

