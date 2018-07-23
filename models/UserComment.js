const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserComment = new Schema({
    UserComment: [
        {
            pollId: Number,
            userId: String,
            name: String,
            comment: String
        }
    ] 
})

module.exports = Poll = mongoose.model('UserComment', UserComment)