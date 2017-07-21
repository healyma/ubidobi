var jwt=require('jwt-simple');
var config=require('../config.js');

module.exports=function(req,res,next){
    var token=(req.body && req.body.usrToken || req.query && req.query.usrToken || req.headers['x-auth']);
    if(token){
        try{
           var decoded=jwt.decode(token,config.secret);
           if(decoded.expires<=Date.now()){
               res.end("Token has expired",400);   
           }
           req.user=decoded.user;
            next();
          
        }catch(err){
            return(next(err));
        }
    }else{
        res.end("No Token provided",400);   
    }
}