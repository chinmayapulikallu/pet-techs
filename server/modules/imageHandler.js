const pool = require('../modules/pool');
const fs = require('fs-extra');
const AWS = require('aws-sdk');

const BUCKET_NAME = process.env.BUCKET_NAME;
const IAM_USER_KEY = process.env.IAM_USER_KEY;
const IAM_USER_SECRET = process.env.IAM_USER_SECRET;

const verbose = true; //turns on and off console.logs

const uploadPost = async (req, res) => {
    let profile_img = await uploadToS3(req.file, res);
    uploadToSQL(req, profile_img, res);
}

const uploadPetProfile = async (req, res) => {
    let profile_img = await uploadToS3(req.file, res);
    uploadPetProfileToSQL(req, profile_img, res);
}
const uploadClientProfile = async (req, res) => {
    let profile_img = await uploadToS3(req.file, res);
    uploadClientProfileToSQL(req, profile_img, res);
}

const uploadVTPost = async (req, res) => {
    let profile_img = await uploadToS3(req.file, res);
    uploadVTProfileToSQL(req, profile_img, res);
}

const uploadVTProfile = async (req, res) => {
    let profile_img = await uploadToS3(req.file, res);
    uploadVTProfileToSQL(req, profile_img, res);
}



const generateSignedUrls = async (res, rows) => {
    const newRows = await addSignedUrls(rows);
    verbose && console.log({ newRows });
    res.send(newRows);
}



const addSignedUrls = async rows => {
    const newRows = [];
    for (const row of rows) {
        const profile_img = await generateSignedUrl(row.profile_img);
        row.profile_img = profile_img;
        newRows.push(row);
    }
    return new Promise(resolve => {
        resolve(newRows);
    })
}

function generateSignedUrl(key) {
    return new Promise(revolve => {
        let s3bucket = new AWS.S3({
            accessKeyId: IAM_USER_KEY,
            secretAccessKey: IAM_USER_SECRET,
            Bucket: BUCKET_NAME,
            signatureVersion: 'v4',
            region: 'us-west-1',
        });
        let urlParams = { Bucket: BUCKET_NAME, Key: key };
        verbose && console.log({ urlParams });
        s3bucket.getSignedUrl('getObject', urlParams, function (error, url) {
            if (error) {
                verbose && console.log(error);
                resolve('');
            } else {
                verbose && console.log('url in getsigned response: ', url);
                revolve(url);
            }
            verbose && console.log(url, error);

        })
    })
}

function uploadToS3(file, res) {
    return new Promise(resolve => {
        fs.readFile(file.path)
            .then(data => {
                verbose && console.log(`file read: `, data);
                let s3bucket = new AWS.S3({
                    accessKeyId: IAM_USER_KEY,
                    secretAccessKey: IAM_USER_SECRET,
                    Bucket: BUCKET_NAME,
                    signatureVersion: 'v4',
                    region: 'us-west-1',
                });
                s3bucket.createBucket(function () {
                    var params = {
                        Bucket: BUCKET_NAME,
                        Key: file.filename,
                        Body: data,
                    };
                    s3bucket.upload(params, function (error, data) {
                        if (error) {
                            res.sendStatus(500);
                        }
                        resolve(data.Key);
                    })
                })
            })
            .catch(error => {
                res.sendStatus(500);
            })
    })
}

function uploadToSQL(req, profile_img, res) {
    const user_id = req.user.id;
    const client_name = req.body.client_name;
    const home_address_house = req.body.home_address_house;
    const apt_suite = req.body.apt_suite;
    const city = req.body.city;
    const state = req.body.state;
    const zip_code = req.body.zip_code;
    // const profile_img = req.body.profile_img;
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
    console.log('client id from imageHandler', profile_img, user_id, client_name, home_address_house, apt_suite, city, state, zip_code, profile_img, about_client, about_home, about_equipment, contact_name_1, contact_phone_1, contact_email_1, vet_clinic, clinic_address, clinic_phone, transport)

    return new Promise(resolve => {
        const queryText =
            `INSERT INTO "client" ( user_id, client_name, home_address_house, apt_suite, city, state, zip_code, profile_img, about_client, about_home, about_equipment, contact_name_1, contact_phone_1, contact_email_1, vet_clinic, clinic_address, clinic_phone, transport)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18);`;

        pool.query(queryText, [
            user_id,
            client_name,
            home_address_house,
            apt_suite,
            city,
            state,
            zip_code,
            profile_img,
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
                verbose && console.log('back from db with:', result);
                res.sendStatus(201);
            })
            .catch((error) => {
                verbose && console.log('error in POST', error);
                res.sendStatus(500);
            })
    })
}



function uploadPetProfileToSQL(req, profile_img, res) {
    return new Promise(resolve => {
        const id = req.params.id;
        console.log('pet data from imageHandler', profile_img, id)

        const queryText = `UPDATE pet SET profile_img = $2 where pet.id = $1;`;

        pool.query(queryText, [id, profile_img])
            .then((result) => {
                verbose && console.log('back from db pet table with:', result);
                res.sendStatus(200);
            })
            .catch((error) => {
                console.log(`Error updating pets by id request. ${sqlText}`, error);
                res.sendStatus(500);
            })
    })
}

function uploadClientProfileToSQL(req, profile_img, res) {
    return new Promise(resolve => {
        const id = req.user.id;
        console.log('client data from imageHandler', profile_img)

        const queryText = `UPDATE client SET profile_img = $2 where client.user_id = $1;`;

        pool.query(queryText, [id, profile_img])
            .then((result) => {
                verbose && console.log('back from db pet table with:', result);
                res.sendStatus(200);
            })
            .catch((error) => {
                console.log(`Error updating pets by id request.`, error);
                res.sendStatus(500);
            })
    })
}

function uploadVTProfileToSQL(req, profile_img, res) {
    console.log('req.body', req.body)
    const user_id = req.user.id;
    const vet_name = req.body.vet_name;
    const home_address_house = req.body.home_address_house;
    const apt_suite = req.body.apt_suite;
    const city = req.body.city;
    const state = req.body.state;
    const zip_code = req.body.zip_code;
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
    const bioYourself = req.body.bioYourself;
    const cpr_first_aid = req.body.cpr_first_aid;
    const oral_medication = req.body.oral_medication;
    const injectable_medication = req.body.injectable_medication;
    const exp_older_pet = req.body.exp_older_pet;
    const exp_special_pet = req.body.exp_special_pet;
    const daily_exercise = req.body.daily_exercise;
    const pet_longer_than_a_week = req.body.pet_longer_than_a_week;
    const diabetic_insulin_care = req.body.diabetic_insulin_care;
    console.log('--->VT id from imageHandler', user_id,
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
        bioYourself,
        cpr_first_aid,
        oral_medication,
        injectable_medication,
        exp_older_pet,
        exp_special_pet,
        daily_exercise,
        pet_longer_than_a_week,
        diabetic_insulin_care)

    return new Promise(resolve => {
        const queryText =
            `INSERT INTO "vet_tech" ( user_id, vet_name, home_address_house, 
            apt_suite, city, state, zip_code, profile_img, sleep_over, boarding, 
            dropin_care, hospice, about_vet, dogs, cats, other, vet_available, 
            zero_two, two_four, four_eight, not_available, small_dog, medium_dog, 
            large_dog, giant_dog, pet_younger_than_one, pet_more_than_one_family, 
            equipment_list, experience, certifications, current_job_title, expertise,bioYourself, 
            cpr_first_aid, oral_medication, injectable_medication, exp_older_pet, 
            exp_special_pet, daily_exercise, pet_longer_than_a_week, 
            diabetic_insulin_care)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, 
                $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, 
                $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, 
                $38, $39, $40, $41)`;

        pool.query(queryText, [
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
            bioYourself,
            cpr_first_aid,
            oral_medication,
            injectable_medication,
            exp_older_pet,
            exp_special_pet,
            daily_exercise,
            pet_longer_than_a_week,
            diabetic_insulin_care
        ])
            .then((result) => {
                verbose && console.log('back from db with:', result);
                res.sendStatus(201);
            })
            .catch((error) => {
                verbose && console.log('error in POST', error);
                res.sendStatus(500);
            })
    })
}

function uploadVTProfileToSQL(req, profile_img, res) {
    return new Promise(resolve => {
        const id = req.user.id;
        console.log('client data from imageHandler', profile_img)

        const queryText = `UPDATE vet_tech SET profile_img = $2 where vet_tech.user_id = $1;`;

        pool.query(queryText, [id, profile_img])
            .then((result) => {
                verbose && console.log('back from db vet_tech table with:', result);
                res.sendStatus(200);
            })
            .catch((error) => {
                console.log(`Error updating VT by id request.`, error);
                res.sendStatus(500);
            })
    })
}


module.exports = { uploadPost, generateSignedUrls, uploadPetProfile, uploadClientProfile, uploadVTPost, uploadVTProfile };
