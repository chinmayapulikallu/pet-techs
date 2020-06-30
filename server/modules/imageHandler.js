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

const generateSignedUrls = async (res, rows) => {
    const newRows = await addSignedUrls(rows);
    verbose && console.log({ newRows });
    res.send(newRows);
}



const addSignedUrls = async rows => {
    const newRows = [];
    for (const row of rows) {
        const media_url = await generateSignedUrl(row.profile_img);
        row.media_url = media_url;
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


module.exports = { uploadPost, generateSignedUrls, uploadPetProfile };
