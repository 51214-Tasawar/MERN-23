const {hash} = require("bcryptjs");

const responseHandler = require("../responseHandler")
const errorHandler =require("../errorHandler");
const { response } = require("express");


module.exports={
    createUser:async(req,res)=>{
        req.body.password = await hash(req.body.password , 10)
   try{
   return responseHandler(res , req.body);
   }catch(error){
return errorHandler(res , error)
   }
    } ,
    getUsers:(req,res)=>{
   try{
      return res.send({
        code : 200 ,
        status : "OK" ,
        response : req.body 
      })
   }catch(error){
      return errorHandler(res , error)
   }
    },
    updateUser:(req , res)=>{
       try{
         return responseHandler(res , req.body);
       }catch(error){
         return errorHandler(res , error)
       }
    },
    deleteUser:(req ,res)=>{
    try{
      return responseHandler(res , req.query);
    }catch(error){
      return errorHandler(res , error)
    }
    }

}