const express = require('express');
const router = express.Router();

// Model Poll

const Poll = require('../../models/Poll')

router.get('/', (req,res) => {
    Poll.find()
        .sort({date: -1 })
        .then(polls => res.json(polls))
});

router.post('/polls', (req,res) => {
    const newPoll = new Poll({
        name: req.body.name,
        content: req.body.content
    })
    newPoll.save().then(r => res.json(r));
});

router.delete('/polls', (req,res) => {
    Poll.remove({}, err => {
        if (err) {
            console.log(err)
        } else {
            res.json('success');
        }
    })
});

module.exports = router;


