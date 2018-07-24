const Emotion = require('../../models/EmotionStat')

module.exports. getEmotions = (req,res) => {
    Emotion.find()
        .sort({date: -1 })
        .then(emotions => res.json(emotions))
}

module.exports.postEmotions = (req,res) => {
    const newEmotion = new Emotion({
        type: req.body.type,
    })
    newEmotion.save().then(emotion => res.json(emotion));
}

module.exports.removeEmotions = (req,res) => {
    Emotion.remove({}, err => {
        if (err) {
            console.log(err)
        } else {
            res.json('remove success');
        }
    })
}

module.exports.getEmotion = (req,res) => {
    Emotion.findById({_id:req.params.id})
        .then(emo => res.json(emo))
}

module.exports.putEmotion = (req,res) => {
    Emotion.findOneAndUpdate({_id:req.params.id},req.body)
        .then(emo => res.json(emo))
}

module.exports.removeEmotion = (req,res) => {
    Emotion.findByIdAndRemove({_id:req.params.id}, (err,p) => {
        if (err) {
            console.log(err)
        } else {
            res.json(`remove success => ${p}`);
        }
    })
}


