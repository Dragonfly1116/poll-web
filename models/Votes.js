const mongoose = require("mongoose")
const Schema = mongoose.Schema

const VoteSchema = new Schema({
    name: String,
    count: { type:Number, default: 0},
    lists: [
        { user: String }
    ]
})

module.exports = Vote = mongoose.model('Vote', VoteSchema)