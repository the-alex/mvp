// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');

const axios = require('axios');
const request = require('request');
const API_KEY = process.env.GOOGLE_API_KEY || require('./secrets.js').API_KEY;

// Authenticate

// Creates a client
const client = new vision.ImageAnnotatorClient();

const fileName = './assets/alex.jpg';

// Performs label detection on the local file

const getImageLabels = imgUrl => {
  return client.labelDetection(fileName);
}

module.exports = {
  getImageLabels,
};
