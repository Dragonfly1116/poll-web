const mongoose = require("mongoose")
const Schema = mongoose.Schema

const PollSchema = new Schema({
    name: String,
    content: String,
    author: String,
    date: { type: Date, default: Date.now },
    Options: [{
        vote: String
    }]
})

module.exports = Poll = mongoose.model('Poll', PollSchema);