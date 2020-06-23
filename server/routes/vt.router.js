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
  const hourSelectOne = req.body.hourSelectOne;
  const hourSelectTwo = req.body.hourSelectTwo;
  const hourSelectThree = req.body.hourSelectThree;
  const hourSelectFour = req.body.hourSelectFour;
  const smallAnimal = req.body.smallAnimal;
  const mediumAnimal = req.body.mediumAnimal;
  const largeAnimal = req.body.largeAnimal;
  const giantAnimal = req.body.giantAnimal;
  const youngAnimals = req.body.youngAnimals;
  const multipleAnimals = req.body.multipleAnimals;
  const optionalEquipment = req.body.optionalEquipment;
  const experienceYear = req.body.experienceYear;
  const certifications = req.body.certifications;
  const currentJob = req.body.currentJob;
  const expertise = req.body.expertise;
  const bioYourself = req.body.bioYourself;
  const cpr = req.body.cpr;
  const oralMedication = req.body.oralMedication;
  const injectableMedication = req.body.injectableMedication;
  const expOlderPet = req.body.expOlderPet;
  const expSpecialPet = req.body.expSpecialPet;
  const dailyExercise = req.body.dailyExercise;
  const petLongerThanAWeek = req.body.petLongerThanAWeek;
  const diabeticInsulinCare = req.body.diabeticInsulinCare;
  const queryText =
    'INSERT INTO "vet_tech" ( home_address_house, apt_suite, city, state, zip_code, profile_img, sleep_over, boarding, dropin_care, hospice, about_vet, dogs, cats, other, hourSelectOne, hourSelectTwo, hourSelectThree, hourSelectFour, smallAnimal, mediumAnimal, largeAnimal, giantAnimal, youngAnimals, multipleAnimals, optionalEquipment, experienceYear, certifications, currentJob, expertise, bioYourself, cpr, oralMedication, injectableMedication, expOlderPet, expSpecialPet, dailyExercise, petLongerThanAWeek, diabeticInsulinCare)VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38)';
  pool
    .query(queryText, [
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
      hourSelectOne,
      hourSelectTwo,
      hourSelectThree,
      hourSelectFour,
      smallAnimal,
      mediumAnimal,
      largeAnimal,
      giantAnimal,
      youngAnimals,
      multipleAnimals,
      optionalEquipment,
      experienceYear,
      certifications,
      currentJob,
      expertise,
      bioYourself,
      cpr,
      oralMedication,
      injectableMedication,
      expOlderPet,
      expSpecialPet,
      dailyExercise,
      petLongerThanAWeek,
      diabeticInsulinCare,
    ])
    .then(() => res.sendStatus(201))

    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;
