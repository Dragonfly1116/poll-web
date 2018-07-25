const Votes = require('../../models/UserVoting')

module.exports.getVotes = (req,res) => {
    Votes.find()
        .sort({date: -1 })
        .then(vote => res.json(vote))
}

module.exports.postVotes = (req,res) => {
    const newVote = new Votes({
        pollId: req.body.pollId,
        name: req.body.name,
        count: req.body.count,
        emoType: req.body.emoType 
    })
    newVote.save().then(vote => res.json(vote));
}

module.exports.removeVotes = (req,res) => {
    Votes.remove({}, err => {
        if (err) {
            console.log('err')
        } else {
            res.json('remove success');
        }
    })
}

module.exports.getVote = (req,res) => {
    Votes.findById({pollId:req.body.pollId,emoType:req.body.emoType})
        .then(vote => res.json(vote))
}

module.exports.putVote = (req,res) => {
    Votes.findOneAndUpdate({pollId:req.body.pollId,emoType:req.body.emoType},req.body)
        .then(vote => res.json(vote))
}

module.exports.removeVote = (req,res) => {
    Votes.findOneAndRemove({pollId:req.body.pollId,emoType:req.body.emoType}, (err,p) => {
        if (err) {
            console.log(pollId)
            console.log(req.params.userId)
        } else {
            res.json(`remove success => ${p}`);
        }
    })
}