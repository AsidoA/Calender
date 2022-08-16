const jwt = require('jsonwebtoken');

module.exports = (req,res,next) => {

    try{
        const authHead = req.headers.authorization;
            const token = authHead.split(' ')[1];
                jwt.verify(token,process.env.SECRET_KEY);
                    next();
        
    }catch{
            return res.status(409).json({Msg:"Not Authrized Request"});
    };
}