const express = require('express')
const router = express.Router()

const Poll = require('../../models/Polls')
const verifyToken = require('./verifyToken')
const loadUser = require('./loadUser')


router.get('/polls/', (req,res) => {
    Poll.find()
        .sort({date: -1})
        .then( polls => res.json(polls))
})

router.delete('/polls/', (req,res) => {
    Poll.remove({}, err => {
        if(err) {
            return res.status(500).json(err)
        } else {
            return res.status(200).json({message: 'delete all polls'})
        }
    })
})

router.use('/polls/',verifyToken)
router.post('/polls/', (req,res) => {
    const newPoll = new Poll({
        name: req.body.name,
        content: req.body.content,
        author: req.body.user
    })
    newPoll.save()
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json(err))
})

router.route('/poll/:id')
    .all(verifyToken,loadUser)
    .get((req,res) => {
        Poll.findById({_id:req.params.id})
            .then( poll => res.status(200).json(poll))
            .catch( err => res.status(403).json(err))
    })
    .delete((req,res) => {
        Poll.findOneAndRemove({_id: req.params.id,author: req.user}, (err,result) => {
            if(err) {
                res.status(403).json(err)
            } else 
                res.status(200).json(result)
        })
    })
    .put((req,res) => {
        Poll.findOneAndUpdate({_id:req.params.id, author:req.user}, req.body)
            .then(result => res.status(200).json(result))
            .catch(err => res.status(500).json(err))
    })

module.exports = router