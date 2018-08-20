const Comments = require('../../models/UserComment')

module.exports.getComments = (req,res) => {
    Comments.find()
        .sort({date: -1 })
        .then(comment => res.json(comment))
}

module.exports.postComment = (req,res) => {
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
    Comments.find({voteId:req.params.voteId})
        .then(Comment => res.json(Comment))
        .catch( err => res.json({message: "empty"}))
}

module.exports.putComment = (req,res) => {
    Comments.findOneAndUpdate({voteId:req.params.voteId},req.body)
        .then(Comment => res.json(Comment))
}

module.exports.removeCommentByVoteId = (req,res) => {
    Comments.deleteMany({voteId:req.params.voteId}, (err,p) => {
        if (err) {
            console.log(err)
        } else {
            res.json(`remove success => ${p}`);
        }
    })
}
module.exports.removeCommentByuserId = (req,res) => {
    Comments.deleteMany({userId:req.params.userId}, (err,p) => {
        if(err) {
            console.log(err)
        } else {
            res.json(`remove success => ${p}`)
        }
    })
}



