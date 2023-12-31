const jwt = require("jsonwebtoken")
const asyncHandler = require("../Middleware/asyncHandler")
require('dotenv').config();

const validateToken = asyncHandler(async(req,res,next)=>{
   const accessToken = req.headers.authorization || req.headers.Authorization
   console.log(accessToken)
    
   if(accessToken && accessToken.startsWith("Bearer")){
    const token = accessToken.split(" ")[1]
    jwt.verify(token, process.env.ACCESS_KEY, (error,decoded)=>{
        if(error){
            res.status(400)
            throw new Error("User is not authorized")
        }
        req.body.user = decoded.user;
        next();
    })
   }else{
       res.status(400)
       throw new Error("Token is missing")
   }
   
})

module.exports = validateToken;