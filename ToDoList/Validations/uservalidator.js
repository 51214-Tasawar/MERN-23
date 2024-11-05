const joi = require("joi")

const newUser = joi.object({
    name : joi.string().min(5).max(60).required(),
username : joi.string().min(8).max(60).required(),
password : joi.string().min(8).max(1000).required()
})
module.exports ={
    createnewUser :async(req ,res , next)=>{
               try{
              await newUser.validateAsync(req.body)
               next();
               }catch(error){
             return  res.send({
                error : error.message
               })
               }
    }
}