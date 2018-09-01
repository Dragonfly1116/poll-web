module.exports = (req,res,next) => {
    if(typeof req.decoded !== 'undefined') {
        req.user = req.decoded.email
        next()
    } else {
        res.status(401).json({
            message: "Unauthorization"
        })
    }
} 