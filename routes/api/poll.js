const express = require('express');
const router = express.Router();

// Model Poll

const Poll = require('../../models/Poll')

router.get('/', (req,res) => {
    Poll.find()
        .sort({date: -1 })
        .then(polls => res.json(polls))
});



module.exports = router;


