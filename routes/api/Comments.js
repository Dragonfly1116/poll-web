const Comments = require('../../models/UserComment')

module.exports.getComments = (req,res) => {
    Comments.find()
        .sort({date: -1 })
        .then(comment => res.json(comment))
}

module.exports.postComments = (req,res) => {
    const newComment = new Comments({
        pollId: req.body.pollId,
        userId: req.body.userId,
        name: req.body.name,
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
    Comments.findById({userId:req.params.userId,pollId:req.params.pollId})
        .then(Comment => res.json(Comment))
}

module.exports.putComment = (req,res) => {
    Comments.findOneAndUpdate({userId:req.params.userId,pollId:req.params.pollId},req.body)
        .then(Comment => res.json(Comment))
}

module.exports.removeComment = (req,res) => {
    Comments.findOneAndRemove({pollId:parseInt(req.params.pollId),userId:req.params.userId}, (err,p) => {
        if (err) {
            console.log(pollId)
            console.log(req.params.userId)
        } else {
            res.json(`remove success => ${p}`);
        }
    })
}



