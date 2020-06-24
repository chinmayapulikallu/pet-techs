const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
router.get("/", (req, res) => {});

/**
 * POST route template
 */
router.post("/", (req, res) => {
  const user_id = req.body.user_id;
  const vet_name = req.body.vet_name;
  const home_address_house = req.body.home_address_house;
  const apt_suite = req.body.apt_suite;
  const city = req.body.city;
  const state = req.body.state;
  const zip_code = req.body.zip_code;
  const profile_img = req.body.profile_img;
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
  const cpr_first_aid = req.body.cpr_first_aid;
  const oral_medication = req.body.oral_medication;
  const injectable_medication = req.body.injectable_medication;
  const exp_older_pet = req.body.exp_older_pet;
  const exp_special_pet = req.body.exp_special_pet;
  const daily_exercise = req.body.daily_exercise;
  const pet_longer_than_a_week = req.body.pet_longer_than_a_week;
  const diabetic_insulin_care = req.body.diabetic_insulin_care;
  const queryText =
    'INSERT INTO "vet_tech" ( user_id, vet_name, home_address_house, apt_suite, city, state, zip_code, profile_img, sleep_over, boarding, dropin_care, hospice, about_vet, dogs, cats, other, vet_available, zero_two, two_four, four_eight, not_available, small_dog, medium_dog, large_dog, giant_dog, pet_younger_than_one, pet_more_than_one_family, equipment_list, experience, certifications, current_job_title, expertise, cpr_first_aid, oral_medication, injectable_medication, exp_older_pet, exp_special_pet, daily_exercise, pet_longer_than_a_week, diabetic_insulin_care)VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40)';
  pool
    .query(queryText, [
      user_id,
      vet_name,
      home_address_house,
      apt_suite,
      city,
      state,
      zip_code,
      profile_img,
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
      cpr_first_aid,
      oral_medication,
      injectable_medication,
      exp_older_pet,
      exp_special_pet,
      daily_exercise,
      pet_longer_than_a_week,
      diabetic_insulin_care,
    ])
    .then(() => res.sendStatus(201))

    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;
