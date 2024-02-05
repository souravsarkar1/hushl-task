const express = require('express');
const { S3Client, PutObjectCommand, ListObjectsV2Command, GetObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
require('dotenv').config();
const { FileTypeToDirectories, FileTypes } = require('../../middleware/document_constants');

const AWS_S3_REGION = process.env.AWS_S3_REGION;
const AWS_S3_BUCKET = process.env.AWS_S3_BUCKET;
const AWS_S3_SECRET_KEY = process.env.AWS_S3_SECRET_KEY;
const AWS_S3_ACCESS_KEY = process.env.AWS_S3_ACCESS_KEY;
const VIEW_MEDIA_AWS_URL_KEY = process.env.VIEW_MEDIA_AWS_URL_KEY;



const s3Client = new S3Client({
  region: AWS_S3_REGION,
  credentials: {
    accessKeyId: AWS_S3_ACCESS_KEY,
    secretAccessKey: AWS_S3_SECRET_KEY,
  },
});


const documentRoutes = express.Router();


documentRoutes.post('/upload', async (req, res) => {
  try {
    const { fileName, contentType, fileType, fileTypeId } = req.body;

    if (!fileName) {
      // return createAPIError(StatusCodes.BAD_REQUEST, `Please provide a file name!`, res);
      return res.status(404).json({ error: 'please provide a file name' });
    }

    if (!contentType) {
      // return createAPIError(StatusCodes.BAD_REQUEST, `Please provide a content type!`, res);
      return res.status(404).json({ error: 'please provide a content type' });
    }

    if (!Object.values(FileTypes).includes(fileType)) {
      // return createAPIError(StatusCodes.BAD_REQUEST, `Please provide a file type!`, res);
      return res.status(404).json({ error: 'please provide a file type', availableFiles: Object.values(FileTypes) });
    }

    if (!fileTypeId) {
      // return createAPIError(StatusCodes.BAD_REQUEST, `Please provide a file type id!`, res);
      return res.status(404).json({ error: 'please provide a file type id' });
    }

    // const random4DigitNumber = Math.floor(1000 + Math.random() * 9000);
    const directory = FileTypeToDirectories[fileType];

    const s3Key = `${directory}/${fileTypeId}/${fileName}`;

    console.log(s3Key, 's3key');

    // Generate pre-signed URL
    const params = {
      Bucket: AWS_S3_BUCKET,
      Key: s3Key,
      ContentType: contentType,
      SSE: 'AES256',
      ACL: 'public-read'
    };

    try {
      const command = new PutObjectCommand(params);
      const url = await getSignedUrl(s3Client, command, { expiresIn: 300 });
      // console.log('Pre-signed URL:', url);
      console.log(url);
      //  / return res.status(StatusCodes.OK).json({ message: 'Pre Signed Url generated', preSignedUrl: url });
      return res.status(200).json({ message: "Presigned URL generated", preSignedUrl: url });
    } catch (error) {
      console.log(error)
      let errorMsg = error.msg || error;
      console.log(errorMsg);
      // logger.error(errorMsg);
      // return createAPIError(StatusCodes.INTERNAL_SERVER_ERROR, 'Error uploading file', res);
      return res.status(500).json({ error: 'Error uploading file' })
    }
  } catch (error) {
    let errorMsg = error.msg || error;
    console.log(errorMsg);
    // logger.error(errorMsg);
    // return createAPIError(StatusCodes.INTERNAL_SERVER_ERROR, errorMsg, res);
    return res.status(500).json({ error: 'Error uploading file' })
  }
})

//get media using s3

// export const getListOfMedia = 

documentRoutes.put('/medialist', async (req, res) => {
  try {
    const command = new ListObjectsV2Command({
      Bucket: AWS_S3_BUCKET,
    });

    try {
      const response = await s3Client.send(command);
      const objects = response.Contents;

      console.log(`Objects in bucket "${AWS_S3_BUCKET}":`);
      objects.forEach(object => {
        console.log(`- ${object.Key}`);
      });
      // return res.status(StatusCodes.OK).send({ medias: objects });
      return res.status(200).json({ medias: objects });
    } catch (error) {
      let errorMsg = error.message || error.msg || error;
      // logger.error(errorMsg);
      // return createAPIError(StatusCodes.INTERNAL_SERVER_ERROR, errorMsg, res);
      return res.status(500).json({ error: errorMsg })
    }
  } catch (error) {
    let errorMsg = error.msg || error;
    // logger.error(errorMsg);
    // return createAPIError(StatusCodes.INTERNAL_SERVER_ERROR, errorMsg, res);
    return res.status(500).json({ error: errorMsg })

  }
})

// export const getViewMediaLink = 

documentRoutes.post('/getviewmedialink', async (req, res) => {
  try {
    const { fileName, contentType, fileType, fileTypeId } = req.body;

    if (!fileName) {
      // return createAPIError(StatusCodes.BAD_REQUEST, `Please provide a file name!`, res);
      return res.status(404).json({ error: 'please provide a file name' });
    }

    if (!contentType) {
      // return createAPIError(StatusCodes.BAD_REQUEST, `Please provide a content type!`, res);
      return res.status(404).json({ error: 'please provide a content type' });
    }

    if (!Object.values(FileTypes).includes(fileType)) {
      // return createAPIError(StatusCodes.BAD_REQUEST, `Please provide a file type!`, res);
      return res.status(404).json({ error: 'please provide a file type', availableFiles: Object.values(FileTypes) });
    }

    if (!fileTypeId) {
      // return createAPIError(StatusCodes.BAD_REQUEST, `Please provide a file type id!`, res);
      return res.status(404).json({ error: 'please provide a file type id' });
    }

    const directory = FileTypeToDirectories[fileType];
    const s3Key = `${directory}/${fileTypeId}/${fileName}`;

    const bucket = AWS_S3_BUCKET;
    const command = new GetObjectCommand({ Bucket: bucket, Key: s3Key });
    try {
      const url = await getSignedUrl(s3Client, command);
      const newUrl = `${VIEW_MEDIA_AWS_URL_KEY}/${s3Key}`
      // console.log(newUrl);
      // console.log('Pre-signed URL:', url );
      return res.status(200).send({
        message: 'Url generated successfully',
        url: newUrl,
      });
    } catch (e) {
      let errorMsg = e.message || e.msg || e;
      // logger.error(errorMsg);
      // return createAPIError(StatusCodes.INTERNAL_SERVER_ERROR, errorMsg, res);
      return res.status(500).json({ error: errorMsg })
    }
  } catch (error) {
    let errorMsg = error.msg || error;
    // logger.error(errorMsg);
    // return createAPIError(StatusCodes.INTERNAL_SERVER_ERROR, errorMsg, res);
    return res.status(500).json({ error: errorMsg })
  }
}
)

module.exports = { documentRoutes }

// export default documentRoutes;