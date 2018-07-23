const express = require('express');
const router = express.Router();

// Model Poll

const Poll = require('../../models/Poll')

router.get('/', (req,res) => {
    Poll.find()
        .sort({date: -1 })
        .then(polls => res.json(polls))
});

router.post('/create', (req,res) => {
    const newPoll = new Poll({
        name: req.body.name
    })
    newPoll.save().then(r => res.json(r));
});



module.exports = router;


