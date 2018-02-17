const express = require('express');
const bodyParser = require('body-parser');
const helpers = require('./helpers/thirdParty.js');
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
  db.retrieve((err, results) => {
    if (err) res.send(err);
    else res.send(JSON.stringify(results));
  });
});

// TODO: Simplify card creation / map function
app.post('/api/cards', function(req, res) {
  // Get image url from body
  let imageUrl = req.body.imageUrl;
  // Make a request to TP API for data.
  helpers
    .getImageLabels(imageUrl)
    .then(results => {
      const labels = results.data.responses[0].labelAnnotations.map(label => {
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
        if (err) {
          res.status(400).send('Bad Request: Probably a duplicate image url');
        } else res.send(JSON.stringify(results));
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
