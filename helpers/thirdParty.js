// Imports the Google Cloud client library
const axios = require('axios');
const request = require('request');
const API_KEY = process.env.GOOGLE_API_KEY || require('./secrets.js').API_KEY;
const API_URL = `https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`;

const getImageLabels = imgUrl => {
  return axios.post(API_URL, {
    requests: [
      {
        image: {
          source: {
            imageUri: imgUrl,
          },
        },
        features: [
          {
            type: 'LABEL_DETECTION',
          },
        ],
      },
    ],
  });
};

module.exports = {
  getImageLabels,
};
