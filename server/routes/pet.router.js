const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
// const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', (req, res) => {

});

/**
 * POST route for PET INFO
 */
router.post('/', (req, res) => {
    let queryPet = `INSERT INTO "pet" 
                        ("client_id", "pet_type", "other_pet", "pet_name","weight", "age", 
                        "sex", "breed", "pet_img", "pet_bio", "food_brand", "feeding_per_day",
                        "amount_per_meal", "other_food", "pet_behavior", "care_equipment")
                        VALUES( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16);`
    let valuesPet = [req.body.client_id, req.body.pet_type, req.body.other_pet, req.body.pet_name, req.body.weight, req.body.age, 
                  req.body.sex, req.body.breed, req.body.pet_img, req.body.pet_bio, req.body.food_brand, req.body.feeding_per_day,
                  req.body.amount_per_meal, req.body.other_food, req.body.pet_behavior, req.body.care_equipment]
    console.log("pet info::::", valuesPet)
    pool.query(queryPet, valuesPet)
    .then((result) => {
        console.log('created in pet table', result);
        let queryMedication = `INSERT INTO "medication" 
                               ("pet_id", "medication_name", "dosage", "dosage_time")
                               VALUES($1, $2, $3, $4);`
        let valuesMedication = [req.body.pet_id, req.body.medication_name, req.body.dosage, req.body.dosage_time]

        pool.query(queryMedication, valuesMedication)
        .then((result) => {
            console.log('created in medication', result);
            res.sendStatus(200);       
    }).catch((error) => {
        console.log("error in post medication:::", error)
        res.sendStatus(500);
    });
    }).catch((error) => {
        console.log("error in post pet:::", error)
        res.sendStatus(500);
    })
});

module.exports = router;