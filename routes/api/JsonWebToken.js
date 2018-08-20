const jwt = require('jsonwebtoken')

module.exports = (req,res,next) => {
    const header = req.headers['authorization']

    if(typeof header !== 'undefined') {
        const token = header.split(' ')[1];
        jwt.verify(token,'secret_key',(err,decoded) => {
            if(err) {
                return res.status(401).json({
                    error: "UnAuthorization"
                })
            } else {
                req.decoded = decoded
                next()
            }
        })
    } else {
        res.status(403).json({
            message: "You don't have permission."
        })
    }
}
