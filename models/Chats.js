const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ChatSchema = new Schema({
    comments: [
        { 
            date: Date, default: Date.now,
            message: String,
            user: String
        }
    ],
    poll: String,
})

module.exports = Chat = mongoose.model('Chat',ChatSchema)