function authUser(req, res, next){
    if(req.user == null){
        res.status(403)
        return res.send('You need to sign in')
    }
}

function authRole(req,res, next){
    return(req,res,next)=>{
        if(req.user._isadmin !== 1){
            res.status(401)
            return res.send("Not allowed")
        }
        next()
    }
}

module.exports = {
    authUser,
    authRole
}