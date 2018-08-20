const express = require('express')
const router = express.Router()

const Polls = require('./Polls');
const Emotions = require('./EmotionStat');
const Votes = require('./Votes');
const Comments = require('./Comments');
const Users = require('./Users');

const VerifyToken = require('./JsonWebToken')

router.post('/polls', VerifyToken)
router.post('/votes', VerifyToken)
router.delete('/polls/:id', VerifyToken)
router.delete('/votes/:pollId/:emoType', VerifyToken)

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

router.route('/comments')
    .get(Comments.getComments)
    .post(Comments.postComment)
    .delete(Comments.removeComments)
router.post('/comments', VerifyToken)
router.delete('/comments', VerifyToken)

router.route('/comments/vote/:voteId')
    .delete(Comments.removeCommentByVoteId)

router.delete('/comments/vote/:voteId', VerifyToken)

router.route('comments/:voteId')
    .get(Comments.getComment)
    .put(Comments.putComment)
router.route('/comments/user/:userId')
    .delete(Comments.removeCommentByuserId)

router.delete('/comments/user/:userId', VerifyToken)

router.route('/votes')
    .get(Votes.getVotes)
    .post(Votes.postVotes)
    .delete(Votes.removeVotes)

router.route('/votes/:pollId/:emoType')
    .get(Votes.getVote)
    .put(Votes.putVote)
    .delete(Votes.removeVote)

router.route('/users')
    .delete(Users.deleteAllUser)
    .get(Users.getUsers)
    .post(Users.signupUser)

router.route('/users/:userId')
    .delete(Users.deleteUser)
    
router.route('/login')
    .post(Users.loginUser)

module.exports = router