const mongoose = require("mongoose")
const Schema = mongoose.Schema

const PollSchema = new Schema({
    name: String,
    content: String,
    user: String,
    date: { type: Date, default: Date.now }
})

module.exports = Poll = mongoose.model('Poll', PollSchema);