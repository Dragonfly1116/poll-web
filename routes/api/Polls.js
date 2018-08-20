const Poll = require('../../models/Poll')

const jwt = require('jsonwebtoken')

module.exports.getPolls = (req,res) => {
    Poll.find()
        .sort({date: -1 })
        .then(polls => res.json(polls))
}

module.exports.postPolls = (req,res) => {
    const newPoll = new Poll({
        name: req.body.name,
        content: req.body.content,
        user: req.decoded.email
    })
    newPoll.save().then(r => res.json(r));
}

module.exports.removePolls = (req,res) => {
    Poll.remove({}, err => {
        if (err) {
            console.log(err)
        } else {
            res.json('success');
        }
    })
}

module.exports.getPoll = (req,res) => {
    Poll.findById({_id:req.params.id})
        .then(poll => res.json(poll))
}

module.exports.putPoll = (req,res) => {
    Poll.findOneAndUpdate({_id:req.params.id},req.body)
        .then(poll => res.json(poll))
}

module.exports.removePoll = (req,res) => {
    Poll.findByIdAndRemove({_id:req.params.id}, (err,p) => {
        if (err) {
            console.log(err)
        } else {
            res.json(`remove success => ${p}`);
        }
    })
}



