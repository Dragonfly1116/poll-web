const mongoose = require("mongoose")
const Schema = mongoose.Schema

const PollSchema = new Schema({
    name: String,
    content: String,
    author: String,
    date: { type: Date, default: Date.now },
    totalVote: {type: Number, default: 0},
    options: [{
        value: String,
        vote: [String]
    }],
})

module.exports = Poll = mongoose.model('Poll', PollSchema);