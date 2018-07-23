const mongoose = require("mongoose")
const Schema = mongoose.Schema

const PollSchema = new Schema({
    poll: [
        {
            name: String,
            date: Date
        }
    ]
    
})

module.exports = Poll = mongoose.model('Poll', PollSchema)