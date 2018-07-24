const mongoose = require("mongoose")
const Schema = mongoose.Schema

const EmotionSchema = new Schema({
    type: String
    
})

module.exports = Poll = mongoose.model('Emotion', EmotionSchema)