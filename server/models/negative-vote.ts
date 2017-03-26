let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let negativeVoteSchema = new Schema({
    voter: { type: String, required: true },
    rated: { type: String, required: true }
});

let NegativeVote = mongoose.model('NegativeVote', negativeVoteSchema);
module.exports = NegativeVote;