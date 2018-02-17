const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/fetcher';
mongoose.connect(MONGODB_URI);

let cardSchema = mongoose.Schema({
  url: {type: String, unique: true, required: true, dropDups: true},
  title: String,
  labels: [
    {
      name: String,
      score: Number,
    },
  ],
});

let Card = mongoose.model('Card', cardSchema);

// TODO: Cleanup/simplify
let save = (cardData, callback) => {
  let card = new Card(cardData);
  card.save((err, documents) => {
    if (err) callback(err, null);
    else callback(null, documents);
  });
};

const retrieve = callback => {
  let query = Card.find();
  query.exec((err, cards) => {
    if (err) callback(err, null);
    else callback(null, cards);
  });
};

module.exports.save = save;
module.exports.retrieve = retrieve;
