let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let positiveVoteSchema = new Schema({
    voter: { type: String, required: true },
    rated: { type: String, required: true }
});

let PositiveVote = mongoose.model('PositiveVote', positiveVoteSchema);
module.exports = PositiveVote;