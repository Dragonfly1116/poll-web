const express = require('express')
const router = express.Router()

const Polls = require('./Polls');
const Emotions = require('./EmotionStat');

router.route('/polls')
    .get(Polls.getPolls)
    .post(Polls.postPolls)
    .delete(Polls.removePolls)

router.route('/polls/:id')
    .get(Polls.getPoll)
    .put(Polls.putPoll)
    .delete(Polls.removePoll)

router.route('/emotions')
    .get(Emotions.getEmotions)
    .post(Emotions.postEmotions)
    .delete(Emotions.removeEmotions)

router.route('/emotions/:id')
    .get(Emotions.getEmotion)
    .put(Emotions.putEmotion)
    .delete(Emotions.removeEmotion)

module.exports = router