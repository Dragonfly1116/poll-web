const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserVoting = new Schema({
    UserVoting: [
        {
            pollId: Number,
            userId: String,
            name: String,
            count: Number,
            emoId: String
        }
    ] 
})

module.exports = Poll = mongoose.model('UserVoting', UserVoting)