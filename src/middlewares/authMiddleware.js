const jwt = require('jsonwebtoken');
module.exports = (req,res,next) => {
    if(req.headers.authorization){
        try{
            req.user = jwt.verify(req.headers.authorization, config.jwt_secret);
        }catch(e){
               return res.status(400).send({error:'Invalid Token'});
        }
        next();
    }else{
       return res.status(401).send({error:'Access Denied'});
    }



}
