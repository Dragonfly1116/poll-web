const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserVoting = new Schema({
    pollId: String,
    name: String,
    count: Number,
    emoType: String, 
})

module.exports = Poll = mongoose.model('UserVoting', UserVoting)