const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserComment = new Schema({
    voteId: String,
    userId: String,
    comment: String
})

module.exports = Poll = mongoose.model('UserComment', UserComment)