const User = require('../../models/Users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const express = require('express')
const router = express.Router()

router.get('/users/', (req,res,next) => {
    User.find()
        .then(result => res.status(200).json(result))
        .catch( err => res.status(500).json(err))
})

router.post('/users/', (req,res,next) => {
    // Not authorization
    next()
}, (req,res,next) => {
    const email = req.body.email
    const pwd = req.body.pwd
    if(email === '' || pwd === '')
        return res.status(400).json({error: 'BAD REQUEST'})
    bcrypt.hash(pwd, 10, (err,hash) => {
        if(err) {
            return res.status(500).json(err) 
        } else {
            const newUser = new User({
                email: email,
                password: hash
            })
            newUser.save()
                .then(result => res.status(200).json(result))
                .catch( err => res.status(500).json(err))
        }
    })
})

router.delete('/users/', (req,res) => {
    User.remove({}, err => {
        if(err)
            return res.status(500).json(err)
        else
            return res.status(200).json({message: "delete all users"})
    })
})

router.delete('/users/:id', (req,res) => {
    User.findByIdAndRemove({_id: req.params.id}, (err,result) => {
        if(err) return res.status(500).json(err)
        else return res.status(200).json(result)
    })
})

router.put('/users/:id',verifyToken, loadUser, (req,res) => {
    User.findOneAndUpdate({_id:req.params.id, email: req.user}, req.body)
        .then( result => res.status(200).json(result))
        .catch( err => res.status(400).json(err))   
})

router.post('/login/', async  (req,res,next) => {
    try {
        const user = await User.find({email: req.body.email})
        if(user.length < 1) return res.status(401).json({message: "Auth failed"})
        else {
            bcrypt.compare(req.body.password,user[0].password, (err,result) => {
                if(err) return res.status(401).json({message: "Auth failed"})
                if(result) {
                    const token = jwt.sign({
                        email: req.body.email
                        },
                        "secret_key",
                        { expiresIn: "1h" }
                    )
                    res.status(200).json({
                        message: "Auth Successful",
                        token: token,
                        user: {
                            email: req.body.email
                        }
                        })
                } else {
                    res.status(401).json({
                        message: "Auth failed"
                    })
                }
            })
        }
    } catch (err) {
        return res.status(401).json({message: "Auth failed"})
    }
})