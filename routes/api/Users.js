const User = require('../../models/Users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports.getUsers = (req,res,next) => {
    User.find()
        .then(result => res.status(200).json(result))
}
module.exports.loginUser = async (req,res,next) => {
    
    try {
        const user = await User.find({email: req.body.email})
        if(user.length < 1) {
            res.status(401).json({
                message: "Auth failed"
            })
        }
        bcrypt.compare(req.body.password,user[0].password, (err,result) => {
            if(err) {
                res.status(401).json({
                    message: "Auth failed"
                })
            }
            if(result) {
                const token = jwt.sign({
                    email: req.params.email
                    },
                    "secret_key",
                    { expiresIn: "1h" }
                )
                res.status(200).json({
                    message: "Auth Successful",
                    token: token
                    })
            } else {
                res.status(401).json({
                    message: "Auth failed"
                })
            }
        })
    } catch (err) {
        res.status(401).json({
            message: "Auth failed"
        })
    }
    
}
module.exports.deleteAllUser = (req,res,next ) => {
    User.remove({}, err => {
        if (err) {
            res.status(500).json({ error: err})
        } else {
            res.status(200).json({ message: "all user deleted"})
        }
    })
}
module.exports.deleteUser = (req,res,next ) => {
    User.findOneAndRemove({_id: req.params.userId})
        .then( result => res.status(200).json({
            message: "User deleted"
        }))
        .catch( err => {
            res.status(500).json({
                error: err
            })
        })
}
module.exports.signupUser = (req,res,next) => {
    bcrypt.hash(req.body.password, 10, function(err, hash) {
        if(err) {
            res.status(500).json({
                error: err
            })
        } else {
            const user = new User({
                email: req.body.email,
                password: hash
            })
            user
                .save()
                .then(result => {
                    console.log(result)
                    res.status(200).json({
                        message: 'user created'
                    })
                })
                .catch( err => {
                    res.status(500).json({error: err})
                })
        }
    });
}