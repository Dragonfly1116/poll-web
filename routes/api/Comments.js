const Comments = require('../../models/UserComment')

module.exports.getComments = (req,res) => {
    Comments.find()
        .sort({date: -1 })
        .then(comment => res.json(comment))
}

module.exports.postComments = (req,res) => {
    const newComment = new Comments({
        userId: req.body.pollId,
        voteId: req.body.voteId,
        comment: req.body.comment
    })
    newComment.save().then(comment => res.json(comment));
}

module.exports.removeComments = (req,res) => {
    Comments.remove({}, err => {
        if (err) {
            console.log('err')
        } else {
            res.json('remove success');
        }
    })
}

module.exports.getComment = (req,res) => {
    Comments.findById({voteId:req.params.voteId})
        .then(Comment => res.json(Comment))
}

module.exports.putComment = (req,res) => {
    Comments.findOneAndUpdate({voteId:req.params.voteId},req.body)
        .then(Comment => res.json(Comment))
}

module.exports.removeComment = (req,res) => {
    Comments.findOneAndRemove({voteId:req.params.voteId}, (err,p) => {
        if (err) {
            console.log(log)
        } else {
            res.json(`remove success => ${p}`);
        }
    })
}



