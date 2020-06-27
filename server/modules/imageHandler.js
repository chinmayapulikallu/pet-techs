const pool  = require('../modules/pool');
const fs    = require('fs-extra');
const AWS   = require('aws-sdk');

const BUCKET_NAME = process.env.BUCKET_NAME;
const IAM_USER_KEY = process.env.IAM_USER_KEY;
const IAM_USER_SECRET = process.env.IAM_USER_SECRET;
 
const verbose = true; //turns on and off console.logs

const uploadPost = async (req, res) => {
  let media_key = await uploadToS3(req.file, res);
  uploadToSQL(req, media_key, res);
}

// const uploadPostWithText = async (req, res) => {
//   let media_key = await uploadToS3(req.file, res);
//   uploadToSQLWithText(req, media_key, res);
// }

const generateSignedUrls = async (res, rows) => {
    const newRows = await addSignedUrls(rows);
    verbose && console.log({newRows});
    res.send(newRows);
}

const addSignedUrls = async rows => {
    const newRows = [];
    for(const row of rows){
      const media_url = await generateSignedUrl(row.media_key);
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
    let urlParams = {Bucket: BUCKET_NAME, Key: key};
    verbose && console.log({urlParams});
    s3bucket.getSignedUrl('getObject', urlParams, function(error, url) {
      if(error){
        verbose && console.log(error);
        // resolve('');
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

function uploadToSQL(req, media_key, res) {
    let item = req.body.item;
    let boxId = req.params.id;
    let roomId = req.params.roomId;
    let userId = req.user.id;
    console.log('boxId', media_key, item, boxId, roomId, userId)

  return new Promise(resolve => {
    const queryText = `INSERT INTO "items" (item,picture,box_id,room_id,user_id) VALUES ($1,$2,$3,$4,$5) RETURNING id`;
    
    pool.query(queryText, [item, media_key, boxId, roomId, userId])
      .then((result) => {
        verbose && console.log('back from db with:', result);
        res.sendStatus(200);
      })
      .catch((error) => {
        verbose && console.log('error in POST', error);
        res.sendStatus(500);
      })
  })
}




module.exports = { uploadPost, generateSignedUrls };
