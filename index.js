const express = require('express');
const bodyParser = require('body-parser');

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

app.post('/api/cards', function(req, res) {
  // Get image url from body
  // Make a request to TP API for data.
  // Add data to database.
  // Return data.
});

app.get('/api/card/:cardId', function(req, res) {
  let cardId = req.params.cardId;
});

let port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
