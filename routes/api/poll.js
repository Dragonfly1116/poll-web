const express = require('express');
const router = express.Router();

// Model Poll

const Poll = require('../../models/Poll')

router.get('/polls', (req,res) => {
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

router.get('/polls/:id', (req,res) => {
    Poll.findById({_id:req.params.id})
        .then(poll => res.json(poll))
});

router.put('/polls/:id', (req,res) => {
    Poll.findOneAndUpdate({_id:req.params.id},req.body)
        .then(poll => res.json(poll))
});

router.delete('/polls/:id', (req,res) => {
    Poll.findByIdAndRemove({_id:req.params.id}, (err,p) => {
        if (err) {
            console.log(err)
        } else {
            res.json(`remove success => ${p}`);
        }
    })
});

module.exports = router;


