const jwt = require('jsonwebtoken');

const verifyOwner = (req,res,next) => {
    const token = req.header("Authorization");

    if(!token)
        return res.status(401).json({message: "Access Denied"});

    try{

        const verified = jwt.verify(token,process.env.JWT_SECRET);

        if(verified.role !== "Owner")
            return res.status(403).json({message: "Not Authorized"});

        req.user = verified;
        next();
    }
    catch(error){
        console.log(error);
    }
}

module.exports = verifyOwner;