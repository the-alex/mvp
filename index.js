const express = require('express');
const bodyParser = require('body-parser');
const helpers = require('./helpers/thirdParty.js')
const db = require('./database');

let app = express();

// Parse JSON (uniform resource locators)
app.use(bodyParser.json());
// Parse forms as well
app.use(bodyParser.urlencoded({extended: true}));

// Declare static files
app.use(express.static(__dirname + '/client/build'));

/////////////////////////////////// ROUTES ////////////////////////////////////

app.get('/api/cards', function(req, res) {
  // Return all cards in JSON data format
});

// TODO: Simplify card creation / map function
app.post('/api/cards', function(req, res) {
  // Get image url from body
  let imageUrl = req.body.imageUrl;
  // Make a request to TP API for data.
  helpers
    .getImageLabels(imageUrl)
    .then(results => {
      const labels = results[0].labelAnnotations.map(label => {
        return {
          name: label.description,
          score: label.score,
        };
      });
      const cardData = {
        url: imageUrl,
        labels: labels,
      };
      db.save(cardData, (err, results) => {
        res.send(JSON.stringify(results));
      });
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
});

app.get('/api/card/:cardId', function(req, res) {
  let cardId = req.params.cardId;
});

let port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
