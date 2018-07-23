const mongoose = require("mongoose")
const Schema = mongoose.Schema

const EmotionSchema = new Schema({
    emotion: [
        {
            pollId: Number,
            type: String
        }
    ] 
})

module.exports = Poll = mongoose.model('Emotion', EmotionSchema)